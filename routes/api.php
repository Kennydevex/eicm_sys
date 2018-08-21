<?php



Route::group([
  // 'middleware' => 'api',
  'prefix' => 'auth'
], function ($router) {
  Route::post('register', 'AuthController@register');
  Route::post('login', 'AuthController@login');
  Route::post('logout', 'AuthController@logout');
  Route::post('refresh', 'AuthController@refresh');
  Route::post('me', 'AuthController@me');
  Route::post('payload', 'AuthController@payload');
});

Route::group([
  'middleware' => 'jwt.auth',
  'prefix' => 'cmd',
  'namespace'=>'CMD'
], function ($router) {
  // ==========================================================
  // ================   Tags   ================================
  // ==========================================================
  Route::get('tags', 'TagsController@all');
  Route::get('tag/{id}', 'TagsController@get');
  Route::post('tag/new', 'TagsController@new');
  // ==========================================================
  // ================   Articles   ============================
  // ==========================================================
});


// Route::group([
//   'middleware' => 'jwt.auth',
//   'prefix' => 'sys',
//   'namespace'=>'System'
// ], function ($router) {
//   // ==========================================================
//   // ================   Users   ================================
//   // ==========================================================
//   Route::get('users', 'UsersController@all');
//   Route::get('tag/{id}', 'UsersController@get');
//   Route::post('tag/new', 'UsersController@new');
// });

Route::group([
  // 'middleware' => 'jwt.auth',
  'prefix' => 'sys',
  'namespace'=>'System'
], function ($router) {
  Route::apiResource(
    'users', 'UserController'
  );
});


// Route::apiResource('Test', 'TestController');
// Route::apiResource([
//   // 'Test1' => 'TestController',
//   // 'Test2' => 'Test2Controller'
// ]);
