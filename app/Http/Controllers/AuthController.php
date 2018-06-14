<?php

namespace EICM\Http\Controllers;

use Illuminate\Http\Request;
use JWTSubject;
use JWTAuth;
use User;

class AuthController extends Controller
{
  /**
  * Create a new AuthController instance.
  *
  * @return void
  */
  public function __construct()
  {
    /*$this->middleware('auth:api', ['except' => ['login', 'register']]);*/
    $this->middleware('jwt_auth', ['except' => ['login', 'register']]);
  }


  public function register(Request $request)
  {
    $this->validate($request,[
      'name' => 'required|max:255',
      'email' => 'required|email|max:255|unique:users',
      'password' => 'required|min:6',
    ]);
    //  create db
    $user= new User();
    $user->name=$request->name;
    $user->email=$request->email;
    $user->password=bcrypt($request->password);
    $user->save();

    // response

    return response()->json([
      'user'=>$user,
      'message'=>'Utilizador criado com sucesso'
    ], 201);

  }

  /**
  * Get a JWT via given credentials.
  *
  * @return \Illuminate\Http\JsonResponse
  */
  public function login()
  {
    $credentials = request(['email', 'password']);

    if (! $token = auth()->claims(['eicm' => 'eicmtoken'])->attempt($credentials)) {
      return response()->json(['error' => 'Unauthorized'], 401);
    }

    return $this->respondWithToken($token);
  }

  /**
  * Get the authenticated User.
  *
  * @return \Illuminate\Http\JsonResponse
  */
  public function me()
  {
    return response()->json(auth()->user());
  }

  /**
  * Log the user out (Invalidate the token).
  *
  * @return \Illuminate\Http\JsonResponse
  */
  public function logout()
  {
    auth()->logout();

    return response()->json(['message' => 'Successfully logged out']);
  }

  /**
  * Refresh a token.
  *
  * @return \Illuminate\Http\JsonResponse
  */
  public function refresh()
  {
    return $this->respondWithToken(auth()->refresh());
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
      'token_type' => 'bearer',
      'expires_in' => auth()->factory()->getTTL() * 60
    ]);
  }

  public function payload()
  {
    return auth()->payload();
  }
}
