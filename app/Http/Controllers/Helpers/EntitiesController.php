<?php

namespace EICM\Http\Controllers\Helpers;

use Illuminate\Http\Request;
use EICM\Http\Controllers\Controller;
use EntityCollection;
use EntityResource;
use Entity;
use EntityRequest;

class EntitiesController extends Controller
{
  /**
    * Create a new ArticlesController instance.
    *
    * @return void
    */
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    $entities = Entity::all();
    return new EntityCollection($entities);
  }

  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(EntityRequest $request)
  {
    $entity = new Entity();
    $entity::create([
      'name'=> $request->name,
      'description'=> $request->description,
      'status'=> $request->status
    ]);
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
    Entity::findOrFail($id)->update([
      'name' => $request->name,
      'description' => $request->description,
    ]);
    return response()->json([
      'message'=>'Endidade atualizado com sucesso'
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
    Entity::findOrFail($id)->delete();

    return response()->json([
      'message'=>'Entidade eliminado com sucesso'
    ], 201);
  }
}
