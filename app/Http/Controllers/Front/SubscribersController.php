<?php

namespace EICM\Http\Controllers\Front;
use Subscriber;

use Illuminate\Http\Request;
use EICM\Http\Controllers\Controller;

class SubscribersController extends Controller
{
    public function subscribe(Request $request)
    {
        $subscriber = new Subscriber();
        $subscriber::create(['email'=>$request->email]);

        return response()->json([
            'message' => 'Dados enviados com sucesso',
        ], 201);
    }
}
