<?php

namespace EICM\Http\Resources\Helpers;

use Illuminate\Http\Resources\Json\JsonResource;

class Entity extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
