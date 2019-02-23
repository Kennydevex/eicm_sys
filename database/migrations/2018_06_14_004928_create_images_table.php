<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {
    Schema::create('images', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name', 50)->unique();
      $table->text('description', 200)->nullable();
      $table->integer('article_id')->unsigned();
      $table->timestamps();
      /*
      -----------------Relacionamentos-----------------------------
      */
      $table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');
    });
  }

  /**
  * Reverse the migrations.
  *
  * @return void
  */
  public function down()
  {
    Schema::dropIfExists('images');
  }
}
