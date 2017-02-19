<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Menu extends Controller
{

    public function __construct()
    {

    }

    public function create(Request $request)
    {
        $menu = $request->input('menu');
        $menuObj = new \App\Menu($menu);
        $result = $menuObj->save();
        return "saved";
    }

    public function get()
    {
        $menus = \App\Menu::all();
        return response()->json([
            'data' => $menus,
            'message' => 'Menu list',
            'code' => 201
        ]);
    }
}
