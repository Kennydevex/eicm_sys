<?php

namespace EICM\Models\CMS;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Tag extends Model
{
  use Sluggable;

  /**
  * Return the sluggable configuration array for this model.
  *
  * @return array
  */
  public function sluggable()
  {
    return [
      'slug' => [
        'source' => 'name'
      ]
    ];
  }


    protected $guarded = ['id'];
    // protected $touches = ['articles'];

    public function articles()
    {
        return $this->belongsToMany('Article');
    }
}
