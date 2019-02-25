<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->string('cover')->unique();
            $table->text('description');
            $table->date('start');
            $table->unsignedInteger('category_id');
            $table->unsignedInteger('subject_id');
            $table->unsignedInteger('course_profile_id');
            $table->timestamps();
            /*
            -----------------Relacionamentos-----------------------------
            */
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('subject_id')->references('id')->on('subjects')->onDelete('cascade');
            $table->foreign('course_profile_id')->references('id')->on('course_profiles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
