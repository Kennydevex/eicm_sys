<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->text('body');
            $table->boolean('status')->nullable()->default(false);
            //Auto relacionament6o para permitir utuloizadores a comentar comentários
            $table->unsignedInteger('parrent_id')->default(0);
            //Agora vamos utilizar the morph relationchip
            $table->string('commentable_type');
            $table->integer('commentable_id');
            $table->timestamps();
            // $table->unsignedInteger('article_id');
            // $table->unsignedInteger('user_id');

            // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            // $table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');
            $table->foreign('parrent_id')->references('id')->on('comments')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
