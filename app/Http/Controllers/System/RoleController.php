<?php

namespace EICM\Http\Controllers\System;

use Illuminate\Http\Request;
use EICM\Http\Controllers\Controller;
use RoleCollection;
use RoleResource;
use Role;
use RoleRequest;

class RoleController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    $roles = Role::all();
    return new RoleCollection($roles);
  }

  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(RoleRequest $request)
  {
    $role = new Role();
    $role::create([
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
    Role::findOrFail($id)->update([
      'name' => $request->name,
      'display_name' => $request->display_name,
      'description' => $request->description,
    ]);
    return response()->json([
      'message'=>'Função atualizado com sucesso'
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
    Role::findOrFail($id)->delete();

    return response()->json([
      'message'=>'Função eliminado com sucesso'
    ], 201);
  }
}
