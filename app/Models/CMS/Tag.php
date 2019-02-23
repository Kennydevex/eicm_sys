<?php

namespace EICM\Models\CMS;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{

    protected $guarded = ['id'];
    // protected $touches = ['articles'];

    public function articles()
    {
        return $this->belongsToMany('Article');
    }
}
