<?php

namespace EICM\Models\Front;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    protected $guard = ['id'];
    protected $fillable = ['email'];
}
