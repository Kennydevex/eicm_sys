<?php

namespace EICM\Models\System;
use JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Logon extends Authenticatable implements JWTSubject
{
  use Notifiable;

  /**
  * The table associated with the model.
  *
  * @var string
  */
  protected $table = 'logons';

  /**
  * Indicates if the model should be timestamped.
  *
  * @var bool
  */
  public $timestamps = false;

  protected $hidden = [
    'password', 'remember_token',
  ];

  protected $fillable = [
    'first_name',
    'last_name',
    'username',
    'email',
    'phone_number',
    'password',
    'identification_card',
    'gender'
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
  * Return a key value array, containing any custom claims to be added to the JWT.
  *
  * @return array
  */
  public function getJWTCustomClaims()
  {
    return [];
  }
}
