<?php

namespace App\Http\Controllers\Test;

use App\Helpers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MapController extends Controller
{

    public function index()
    {
        $maps = Api::tarkovApi("POST", [], 'query { maps(lang: fr){
            id, name, normalizedName, 
        }}')['data']['maps'];


        return Inertia::render('Maps/Index', [
            "layoutDatas" => [
                "title" => "Maps",
                "page" => "maps",
            ],
            "maps" => $maps,
        ]);
    }


    public function maps($map = null)
    {
        $layoutDatas = [
            "title" => "Maps",
            "page" => "maps",
        ];

        $links = [
            "customs" => "https://mapgenie.io/tarkov/maps/customs?embed=light",
            "interchange" => "https://mapgenie.io/tarkov/maps/interchange?embed=light",
            "factory" => "https://mapgenie.io/tarkov/maps/factory?embed=light",
            "woods" => "https://mapgenie.io/tarkov/maps/woods?embed=light",
            "labs" => "https://mapgenie.io/tarkov/maps/labs?embed=light",
            "lighthouse" => "https://mapgenie.io/tarkov/maps/lighthouse?embed=light",
            "shorline" => "https://mapgenie.io/tarkov/maps/shoreline?embed=light",
            "ground-zero" => "https://mapgenie.io/tarkov/maps/ground-zero?embed=light",
            "reserve" => "https://mapgenie.io/tarkov/maps/reserve?embed=light",
            "streets-of-tarkov" => "https://mapgenie.io/tarkov/maps/streets-of-tarkov?embed=light",
        ];

        $query = 'query { maps(name: "Customs"){
            id, name, enemies
        }';

        $this->apiGetMap("POST", [], $query);



        return Inertia::render('Maps/Show', [
            "layoutDatas" => $layoutDatas,

            "link" => $links[$map] ?? null,
        ]);
    }
}
