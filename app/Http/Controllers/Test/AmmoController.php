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





        // Explain : This part of code is used to order the ammos by caliber and then by penetration power
        $caliberMap = [
            "Caliber9x18PM" => "9x18 mm",
            "Caliber762x25TT" => "7.62x25 mm",
            "Caliber9x19PARA" => "9x19 mm",
            "Caliber9x21" => "9x21 mm",
            "Caliber1143x23ACP" => ".45 ACP",
            "Caliber9x33R" => ".357 Magnum",
            "Caliber57x28" => "5.7x28 mm",
            "Caliber46x30" => "4.6x30 mm",
            "Caliber545x39" => "5.45x39 mm",
            "Caliber556x45NATO" => "5.56x45 mm",
            "Caliber762x35" => ".300 Blackout",
            "Caliber762x39" => "7.62x39 mm",
            "Caliber366TKM" => ".366",
            "Caliber9x39" => "9x39 mm",
            "Caliber68x51" => "6.8x51 mm",
            "Caliber127x55" => "12.7x55 mm",
            "Caliber762x51" => "7.62x51 mm",
            "Caliber762x54R" => "7.62x54R",
            "Caliber86x70" => ".338 Lapua Magnum",
            "Caliber12g" => "12 Gauge",
            "Caliber20g" => "20 Gauge",
            "Caliber23x75" => "23x75 mm",
            "Caliber40x46" => "40x46 mm",
        ];

        $ammosGroupedByCaliberOrdered = [];
        foreach ($caliberMap as $key => $value) {
            $ammosGroupedByCaliberOrdered[$value] = $ammosGroupedByCaliber[$key];
        }


        return Inertia::render('Ammo/Index', [
            "layoutDatas" => [...$this->layoutDatas, "user" => auth()->user()],
            "ammos"       => $ammosGroupedByCaliberOrdered,
        ]);
    }
}
