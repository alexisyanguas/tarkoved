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
            description, basePrice, image512pxLink
        },
        caliber, weight, tracer, tracerColor, 
        damage, ammoType, armorDamage, fragmentationChance, recoilModifier,accuracyModifier,initialSpeed
    }}";

    public function index()
    {
        $ammos = Api::tarkovApi("POST", [], $this->ammoQuery)['data']['ammo'];
        $ammosOrderedByArmorDamage = collect($ammos)->sortBy(
            'armorDamage',
            SORT_REGULAR,
            true
        )->reverse()->toArray();
        $ammosGroupedByCaliber = collect($ammosOrderedByArmorDamage)->groupBy('caliber');

        return Inertia::render('Ammo/Index', [
            "layoutDatas" => [...$this->layoutDatas, "user" => auth()->user()],
            "ammos"       => $ammosGroupedByCaliber,
        ]);
    }
}
