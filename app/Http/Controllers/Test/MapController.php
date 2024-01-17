<?php

namespace App\Http\Controllers\Test;

use App\Helpers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MapController extends Controller
{

    private $query = 'query { maps(){
        id, name, normalizedName, enemies,raidDuration,
        players, wiki, description
    }}';

    private $layoutDatas = [
        "title" => "Maps",
        "page" => "maps",
    ];

    public function index()
    {
        $maps = Api::tarkovApi(
            "POST",
            [],
            $this->query
        )['data']['maps'];

        $maps = $this->removeMapsInMapsJson($maps, ["night-factory"]);

        return Inertia::render('Maps/Index', [
            "layoutDatas" => $this->layoutDatas,
            "maps" => $maps,
        ]);
    }


    public function maps($map = null)
    {
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

        return Inertia::render('Maps/Show', [
            "layoutDatas" => $this->layoutDatas,
            "link" => $links[$map] ?? null,
        ]);
    }

    private function removeMapsInMapsJson($maps = [], $mapToRemove = [])
    {
        return array_filter($maps, function ($map) use ($mapToRemove) {
            return !in_array($map['normalizedName'], $mapToRemove);
        });
    }
}
