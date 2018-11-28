<?php

Route::any('{all}', function () {
    return view('App.home');
})->where(['all'=>'.*']);

// Route::get('/users', function () {
//     return new UserCollection(Logon::paginate());
// });
