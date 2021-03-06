<?php

namespace EICM\Http\Controllers\System;

use Illuminate\Http\Request;
use EICM\Http\Controllers\Controller;
use PermissionCollection;
use PermissionResource;
use Permission;
use PermissionRequest;

class PermissionController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    $permissions = Permission::all();
    return new PermissionCollection($permissions);
  }

  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(PermissionRequest $request)
  {
    $permission = new Permission();
    $permission::create([
      'name'=> $request->name,
      'display_name'=>  $request->display_name,
      'description'=> $request->description
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
    Permission::findOrFail($id)->update([
      'name' => $request->name,
      'display_name' => $request->display_name,
      'description' => $request->description,
    ]);
    return response()->json([
      'message'=>'Permissao atualizado com sucesso'
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
    Permission::findOrFail($id)->delete();

    return response()->json([
      'message'=>'Permissao eliminado com sucesso'
    ], 201);
  }
}
