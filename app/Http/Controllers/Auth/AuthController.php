<?php

namespace EICM\Http\Controllers\Auth;

use Auth;
use EICM\Http\Controllers\Controller;
use Folk;
use Illuminate\Http\Request;
use JWTAuth;
use User;
use Common;
use EICM\Events\UserRegistered;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['login', 'register']]);
    }

    public function register(Request $request)
    {
        // ======================================================================================================================
        $category = Common::verifyCategory('Utilizadores', 'Folks');
        $folk = new Folk();
        $folk->fill($request->only('first_name', 'last_name', 'identification_card', 'gender', 'phone_number'));
        $folk->category()->associate($category->id);
        $folk->save();
        // ======================================================================================================================
        $user = new User();
        $user->fill($request->only('username', 'email', 'status'));
        $user->password = bcrypt($request->password);
        $user->folk()->associate($folk->id);
        $user->save();

        $user->syncPermissions($request->roles);
        $user->syncPermissions($request->permissions);

        //===========================================================================
        //Chamar evento para alertar utilizador sobre glyphicon-registration-mark
        event(new UserRegistered($user));
        // ======================================================================================================================
        $token = JWTAuth::fromUser($user);
        return response()->json(compact('token', 'user'));
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
      $remember = $request->remember_token;
        $credentials = $request->only('email', 'password');
        $user = User::where('email', $request->email)->with('folk')->first();
        if (!$user) {
          return response()->Json(['error' => 'Esta conta não se concontra registada'], 401);
        }
        $token = JWTAuth::attempt($credentials, $remember);
        if ($user->status) {
            if ($token) {
                return response()->json(compact('token', 'user'));
            }
            return response()->Json(['error' => 'Palavra passe incorreta'], 401);
        }
        return response()->Json(['error' => 'Conta desativada, por favor contacte o administrador do sitema'], 401);

    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth('api')->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'user' => $this->guard()->user(),
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
        ]);
    }

    public function payload()
    {
        return auth('api')->payload();
    }

    public function guard()
    {
        return Auth::Guard('api');
    }
}
