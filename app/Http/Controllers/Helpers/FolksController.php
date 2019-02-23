<?php

namespace EICM\Http\Controllers\Helpers;

use Illuminate\Http\Request;
use EICM\Http\Controllers\Controller;

class FolksController extends Controller
{
  /**
    * Create a new ArticlesController instance.
    *
    * @return void
    */
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }
}
