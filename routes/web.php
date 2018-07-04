<?php

// Route::get('/', function () {
//     return view('_frontend.home');
// });

Route::any('{all}', function () {
    return view('_frontend.home');
})->where(['all'=>'.*']);
