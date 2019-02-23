<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFolksTable extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {
    Schema::create('folks', function (Blueprint $table) {
      $table->increments('id');
      $table->string('first_name', 50);
      $table->string('last_name', 50);
      $table->string('identification_card', 15)->nullable();//Identification Card: Bilhete de Identidade
      $table->enum('gender', ['0', '1', '2'])->default(0);
      $table->string('phone_number', 20)->nullable();
      $table->unsignedInteger('category_id');

      
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
    Schema::dropIfExists('folks');
  }
}
