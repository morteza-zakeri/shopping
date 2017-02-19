<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Product extends Controller
{

    public function __construct()
    {

    }

    public function create(Request $request)
    {

    }

    public function get($id)
    {
        $product = \App\Product::find($id);
        return response()->json([
            'data' => $product,
            'message' => 'specific product data',
            'code' => 201
        ]);
    }

    public function getAll()
    {
        $products = \App\Product::all();
        return response()->json([
            'data' => $products,
            'message' => 'products list',
            'code' => 201
        ]);
    }
}
