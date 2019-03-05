<?php

namespace EICM\Models\System;
use JWTSubject;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable implements JWTSubject
{
  use LaratrustUserTrait;
  use Notifiable;

  /**
  * The attributes that are mass assignable.
  *
  * @var array
  */
  protected $fillable = [
    'username',
    'email',
    'password',
    'status',
    'avatar',
    'folk_id',
  ];



  // Rest omitted for brevity

  /**
  * Get the identifier that will be stored in the subject claim of the JWT.
  *
  * @return mixed
  */
  public function getJWTIdentifier()
  {
    return $this->getKey();
  }

  /**
  * The attributes that should be hidden for arrays.
  *
  * @var array
  */

  /**
  * Return a key value array, containing any custom claims to be added to the JWT.
  *
  * @return array
  */
  public function getJWTCustomClaims()
  {
    return [];
  }


  /**
  * The attributes that should be hidden for arrays.
  *
  * @var array
  */
  protected $hidden = [
    'password', 'remember_token',
  ];

  //################################ Relacionamentos ####################
  public function folk()
  {
    return $this->belongsTo('Folk');
  }

  public function articles()
  {
    return $this->hasMany('Article');
  }


  // Alterar o retorno da base de dados para valor booleano
  public function getStatusAttribute($value)
  {
    if ($value) {
      return true;
    }
    return false;
  }

}
