<?php

namespace EICM\Models\CMS;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{

  protected $guarded = ['id'];
  // protected $touches = ['article'];

  //########################### Relacionamentos ########################
  public function article()
  {
    return $this->belongsTo('Article');
  }
}
