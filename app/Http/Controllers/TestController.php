<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function maps()
    {
        $layoutDatas = [
            "title" => "Maps",
            "page" => "maps",
        ];
        return Inertia::render('Maps/Index',[
            "layoutDatas" => $layoutDatas,

            // 
        ]);
    }
}
