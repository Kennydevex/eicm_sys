<?php

namespace EICM\Models\Helpers;

use Illuminate\Database\Eloquent\Model;

class Folk extends Model
{

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'first_name',
      'last_name',
      'identification_card',
      'gender',
      'phone_number',
      'status',
      'avatar',
  ];
  /**
   * Indicates if the model should be timestamped.
   *
   * @var bool
   */
   public $timestamps = false;



   public function user()
   {
       return $this->hasOne('User');
   }

   public function category()
   {
     return $this->belongsTo('Category');
   }

}
