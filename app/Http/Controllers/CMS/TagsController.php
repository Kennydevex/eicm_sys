<?php

namespace EICM\Http\Controllers\CMS;

use EICM\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;
use Tag;
use TagCollection;
use TagRequest;
use JWTAuth;

class TagsController extends Controller
{
  /**
    * Create a new ArticlesController instance.
    *
    * @return void
    */
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['index', 'show']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // if (!$user = JWTAuth::parseToken()->authenticate()) {
        //     return response()->json(['message'=>'Utiliza;\ao nao autenticado'], 404);
        // }
        $tags = Tag::all();
        return new TagCollection($tags);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TagRequest $request)
    {
        $tag = Tag::create($request->only(["name", "description"]));
        return Response::json(["tag" => $tag], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tag = Tag::findOrFail($id);

        $tag->name = $request->name;
        $tag->description = $request->description;
        $tag->save();

        return response()->json([
            'message' => 'Função atualizado com sucesso',
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tag = Tag::findOrFail($id);
        $tag->delete();

        return response()->json([
            'message' => 'Categoria eliminada com sucesso',
        ], 201);
    }
}
