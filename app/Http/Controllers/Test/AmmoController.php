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
        damage, ammoType, penetrationPower, fragmentationChance, recoilModifier,accuracyModifier,initialSpeed
    }}";

    public function index()
    {
        $ammos = Api::tarkovApi("POST", [], $this->ammoQuery)['data']['ammo'];
        $ammosOrderedByPenetration = collect($ammos)->sortBy(
            'penetrationPower',
            SORT_REGULAR,
            true
        )->reverse()->toArray();
        $ammosGroupedByCaliber = collect($ammosOrderedByPenetration)->groupBy('caliber');

        return Inertia::render('Ammo/Index', [
            "layoutDatas" => [...$this->layoutDatas, "user" => auth()->user()],
            "ammos"       => $ammosGroupedByCaliber,
        ]);
    }
}
