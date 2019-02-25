<?php

namespace EICM\Http\Controllers\CMS;

use Article;
use ArticleCollection;
use ArticleRequest;
use ArticleResource;
use Auth;
use Common;
use EICM\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{

  /**
  * Create a new ArticlesController instance.
  *
  * @return void
  */
  public function __construct()
  {
    $this->middleware('jwt.auth', ['except' => ['publishedArticles', 'featuredArticles', 'show', 'filteredArticle']]);
  }

  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    // $articles = Article::orderBy('created_at', 'arc')->all();
    $articles = Article::all();
    $articles->each(function ($articles) {
      $articles->category;
      $articles->tags;
      $articles->user;
      $articles->image;
    });
    return new ArticleCollection($articles);
  }
  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */

  public function store(ArticleRequest $request)
  {

    $article = new Article;
    $article->title = $request->title;
    $article->summary = $request->summary;
    $article->content = $request->content;
    $article->status = $request->status;
    $article->featuring = $request->featuring;
    $article->start = $request->start;
    $article->end = $request->end;
    $article->user()->associate(auth()->user()->id);
    $article->category()->associate($request->category);
    $article->save();
    //===============================================================
    $article->tags()->attach($request->tags);
    //===============================================================
    $imageName = Common::storeLocalFile($request->get('image'), 'images/app/articles/covers/');
    Common::storeImage($imageName, $article->id, $article->title);

    //#########################################################

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
  public function show($slug)
  {
    $article = Article::findOrFail($slug);
    $article->category;
    $article->tags;
    $article->user;
    $article->image;
    return new ArticleResource($article);

  }

  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, $slug)
  {
    $article = Article::findOrFail($slug);
    $article->title = $request->title;
    $article->summary = $request->summary;
    $article->content = $request->content;
    $article->status = $request->status;
    $article->featuring = $request->featuring;
    $article->featuring = 1;
    $article->start = $request->start;
    $article->end = $request->end;
    $article->user()->associate(auth()->user()->id);
    if (!is_array($request->category)) {
      $article->category()->associate($request->category);
    }
    $article->save();

    //Situação +or resolver, pois quando o maracdo não é alterado no frontend, tem-se erro na backend porque request traz um array de objeto;

    $article->tags()->sync($request->tags);

    return response()->json([
      'message' => 'Artigo atualizado com sucesso',
      'Artigos' => $article,
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
    $article = Article::findOrFail($id);
    $article->delete();

    return response()->json([
      'message' => 'Categoria eliminada com sucesso',
    ], 201);
  }

  public function featuredArticles()
  {
    $articles = Article::where('featuring', true)->orderBy('created_at', 'desc')->take(4)->get();
    $articles->each(function ($articles) {
      $articles->category;
      $articles->tags;
      $articles->user;
      $articles->image;
    });
    return new ArticleCollection($articles);
  }

  public function publishedArticles()
  {
    $articles = Article::where('status', true)->get();
    return new ArticleCollection($articles);

  }


    /**
    * Remove the specified resource from storage.
    *
    * @param  string  $filter_key
    * @return \Illuminate\Http\Response
    */

  public function filteredArticle($filter_key)
  {
    $articles = Article::whereHas('category', function ($query)  use ($filter_key) {
      $query->where('name', '=', $filter_key);
    })->get();

    return new ArticleCollection($articles);
  }
}
