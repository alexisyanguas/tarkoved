<?php

namespace App\Http\Controllers\Test;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Helpers\Api;

class AmmoController extends Controller
{

    private $layoutDatas = [
        "title" => "Ammo",
        "page"  => "ammo",
    ];

    private $ammoQuery = "query{ ammo (){
        item{
            id, name, normalizedName, shortName,
            description, basePrice,
        },
        caliber, weight, tracer, tracerColor, 
        damage, ammoType, armorDamage
    }}";

    public function index()
    {
        $ammos = Api::tarkovApi("POST", [], $this->ammoQuery)['data']['ammo'];

        // Group by caliber
        $ammos = collect($ammos)->groupBy('caliber')->toArray();
        // dd($ammos);

        return Inertia::render('Ammo/Index', [
            "layoutDatas" => [...$this->layoutDatas, "user" => auth()->user()],
            "ammos"       => $ammos,
        ]);
    }
}
