<?php

namespace EICM\Http\Controllers\Helpers;

use Category;
use CategoryCollection;
use CategoryRequest;
use EICM\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Common;


class CategoriesController extends Controller
{

  /**
    * Create a new ArticlesController instance.
    *
    * @return void
    */
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['articleCategories']]);
    }
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    $categories = Category::with('entity')->get();
    return new CategoryCollection($categories);
  }


  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(CategoryRequest $request)
  {

    $category = new Category;
    $category->name = $request->name;
    $category->description = $request->description;
    $category->entity()->associate(Common::findOrCreateEntity('Artigos'));
    $category->save();

    return response()->json([
      'message' => 'Dados enviados com sucesso',
    ], 201);

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
    $category = Category::findOrFail($id);

    $category->name = $request->name;
    $category->description = $request->description;
    $category->entity()->associate($this->findEntity());
    $category->save();

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
    $category = Category::findOrFail($id);
    $category->delete();

    return response()->json([
      'message' => 'Categoria eliminada com sucesso',
    ], 201);
  }

  public function articleCategories()
  {
    $categories = Category::whereHas('entity', function ($query) {
      $query->where('name', 'like', '%rtigo%');
    })->get();
    return new CategoryCollection($categories);

  }
}
