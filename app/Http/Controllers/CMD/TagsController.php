<?php

namespace EICM\Http\Controllers\CMD;

use Illuminate\Http\Request;
use EICM\Http\Controllers\Controller;
use Tag;
use Response;
use EICM\Http\Requests\CreateTagRequest;
class TagsController extends Controller
{
    public function all()
    {
        $tags = Tag::all();

        return Response::json(["tags"=>$tags], 200);
    }

    public function get($id)
    {
        $tag = Tag::whereId($id)->first();
        return Response::json(["tag"=>$tag], 200);
    }

    public function new(CreateTagRequest $request)
    {
        $tag = Tag::create($request->only(["name", "description"]));
        return Response::json(["tag"=>$tag], 200);
    }
}
