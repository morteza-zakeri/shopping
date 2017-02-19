<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->post('/menu', ['middleware' => 'cors', 'uses' => 'Menu@create']);
$app->get('/menu', ['middleware' => 'cors', 'uses' => 'Menu@get']);

$app->get('/product/{id}', ['middleware' => 'cors', 'uses' => 'Product@get']);