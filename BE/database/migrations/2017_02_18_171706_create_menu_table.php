<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('link');
            $table->string('icon')->nullable();
            $table->text('comment')->nullable();
            $table->boolean('disable')->default(0);
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('menus');
    }
}
