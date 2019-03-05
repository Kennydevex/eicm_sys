<?php

namespace EICM\Models\CMS;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Article extends Model
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
        'source' => 'title'
      ]
    ];
  }

  protected $guarded = ['id'];
  // protected $touches = ['category', 'tag'];
  // protected $primaryKey = 'slug';

  //########################### Relacionamentos ########################
  public function user()
  {
    return $this->belongsTo('User');
  }

  public function category()
  {
    return $this->belongsTo('Category');
  }

  public function image()
  {
    return $this->hasOne('ImageFile');
  }

  public function tags()
  {
    return $this->belongsToMany('Tag');
  }

  // public function comments()
  //   {
  //       return $this->hasMany(Comment::class);
  //   }

  //   public function parentComments()
  //   {
  //       return $this->comments()->where('parent_id', 0);
  //   }

  // Alterar o retorno da base de dados para valor booleano
  public function getStatusAttribute($value)
  {
    if ($value) {
      return true;
    }
    return false;
  }

  public function getFeaturingAttribute($value)
  {
    if ($value) {
      return true;
    }
    return false;
  }


}
