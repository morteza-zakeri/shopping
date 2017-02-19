<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id');
            $table->integer('group_id');
            $table->string('title');
            $table->string('icon')->nullable();
            $table->text('comment')->nullable();
            $table->decimal('price');
            $table->decimal('discount_price')->nullable();
            $table->string('producer')->nullable();
            $table->boolean('available')->default(1);
            $table->text('tips')->nullable();
            $table->text('introduce')->nullable();
            $table->text('standards')->nullable();
            $table->text('details')->nullable();
            $table->integer('score_id')->nullable();
            $table->dateTime('exp_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
