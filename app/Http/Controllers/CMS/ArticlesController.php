<?php

namespace EICM\Http\Controllers\CMS;

use Article;
use ArticleCollection;
use ArticleRequest;
use ArticleResource;
use Auth;
use EICM\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::all();
        $articles->each(function ($articles) {
            $articles->category;
            $articles->tags;
            $articles->user;
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
        $article->content = $request->content;
        $article->status = $request->status;
        $article->featuring = 1;
        $article->start = $request->start;
        $article->end = $request->end;
        $article->user()->associate(auth()->user()->id);
        $article->category()->associate($request->category);
        $article->save();

        $article->tags()->attach($request->tags);

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
        $article = Article::findOrFail($id);
        $article->category;
        $article->tags;
        $article->user;

        // return response()->json([
        //     'article' => $article,
        // ], 201);
        return new ArticleResource($article);

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
        $article = Article::findOrFail($id);
        $article->title = $request->title;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->featuring = $request->featuring;
        $article->featuring = 1;
        $article->start = $request->start;
        $article->end = $request->end;
        $article->user()->associate(auth()->user()->id);
        //$article->category()->associate($request->category);
        $article->save();

        $article->tags()->attach($request->tags);

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
}
