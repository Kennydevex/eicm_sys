<?php

Route::group([
  'namespace'=>'Auth',
  'prefix' => 'auth',
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
  'prefix' => 'sys',
  'namespace'=>'System'
], function ($router) {
  Route::apiResource('users', 'UserController');
  Route::apiResource('permissions', 'PermissionController');
  Route::apiResource('roles', 'RoleController');
});

Route::group([
  'prefix' => 'helpers',
  'namespace'=>'Helpers'
], function ($router) {
  Route::apiResource('entities', 'EntitiesController');
  Route::apiResource('folks', 'FolksController');
  Route::apiResource('categories', 'CategoriesController');
  Route::get('article_categories', 'CategoriesController@articleCategories');

});


Route::group([
    'prefix' => 'cms',
    'namespace' => 'CMS',
], function ($router) {
    Route::apiResource('articles', 'ArticlesController');
    Route::get('featuredArticles', 'ArticlesController@featuredArticles');
    Route::get('publishedArticles', 'ArticlesController@publishedArticles');
    Route::get('filteredArticle/{filter_key}', 'ArticlesController@filteredArticle');
    // ================================================================
    Route::apiResource('tags', 'TagsController');
});

Route::group([
  'prefix' => 'services',
  'namespace'=>'Services'
], function ($router) {
  Route::post('send_messages', 'ContactsController@sendMessages');
});

Route::group([
  'prefix' => 'front',
  'namespace'=>'Front'
], function ($router) {
  Route::post('subscribe', 'SubscribersController@subscribe');
});
