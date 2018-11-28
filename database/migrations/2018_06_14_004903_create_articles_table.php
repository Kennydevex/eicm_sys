<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {
    Schema::create('articles', function (Blueprint $table) {
      $table->increments('id');
      $table->string('title')->unique();
      $table->longText('content');
      $table->boolean('status');
      $table->enum('featuring', ['1', '2', '3']);
      $table->date('start');
      $table->date('end');
      $table->unsignedInteger('user_id');
      $table->unsignedInteger('category_id');
      $table->timestamps();
      /*
      -----------------Relacionamentos-----------------------------
      */
      $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
      $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
    });
  }

  /**
  * Reverse the migrations.
  *
  * @return void
  */
  public function down()
  {
    Schema::dropIfExists('articles');
  }
}
