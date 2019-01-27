<?php

namespace EICM\Http\Controllers;

use Illuminate\Http\Request;
use JWTSubject;
use JWTAuth;
use User;
use Folk;
use Auth;

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
      'first_name' => 'required|string|max:255',
       'last_name' => 'required|string|max:255',
       'username' => 'required|unique:users|string|max:255',
       'email' => 'required|string|email|max:255|unique:users',
       'password' => 'required|string|min:8'
    ]);
    //  create db
    // $input = $request->only(['first_name', 'last_name', 'identification_card', 'gender', 'email', 'phone_number']);
    $folk = new Folk();
    $folk->first_name=$request->first_name;
    $folk->last_name=$request->last_name;
    $folk->identification_card=$request->identification_card;
    $folk->gender=$request->gender;
    $folk->phone_number=$request->phone_number;
    $folk->category_id=5;
    $folk->save();

    $user= new User();
    $user->username=$request->username;
    $user->email=$request->email;
    $user->password=bcrypt($request->password);
    $user->status=$request->status;
    $user->folk_id=$folk->id;
    $user->save();

    // Return response

    return response()->json([
      'user'=>$user,
      'folk'=>$folk,
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

    if (! $token = auth('api')->claims(['eicm' => 'eicmtoken'])->attempt($credentials)) {
      return response()->json(['error' => "errrrrrrrrooooooooo"], 401);
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
      'user'=>$this->guard()->user(),
      'token_type' => 'bearer',
      'expires_in' => auth('api')->factory()->getTTL() * 60
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
