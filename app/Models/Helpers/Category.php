<?php

namespace EICM\Models\Helpers;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Category extends Model
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

  protected $hidden = [
    'entity_id',
  ];

  //########################### Relacionamentos ########################
  public function articles()
  {
    return $this->hasMany('Article');
  }

  public function entity()
  {
    return $this->belongsTo('Entity');
  }

  public function folks()
  {
    return $this->hasMany('Folk');
  }
}
