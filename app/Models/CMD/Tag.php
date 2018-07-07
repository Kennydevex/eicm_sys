<?php

namespace EICM\Models\CMD;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{

  protected $guarded = []; 



  public function articles()
  {
      return $this->belongsToMany('Article');
  }
}
