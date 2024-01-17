<?php

namespace App\Http\Controllers\Test;

use Inertia\Inertia;
use App\Helpers\Api;
use App\Http\Controllers\Controller;

class MapController extends Controller
{

    private $query = 'query { maps(){
        id, name, normalizedName, enemies, raidDuration,
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
            "layoutDatas" => [...$this->layoutDatas, "user" => auth()->user()],
            "maps" => $maps,
        ]);
    }


    public function maps($map = null)
    {
        $links = [
            "customs" => "https://tarkov.dev/map/customs",
            "interchange" => "https://tarkov.dev/map/interchange",
            "factory" => "https://tarkov.dev/map/factory",
            "woods" => "https://tarkov.dev/map/woods",
            "the-lab" => "https://tarkov.dev/map/the-lab",
            "lighthouse" => "https://tarkov.dev/map/lighthouse",
            "shoreline" => "https://tarkov.dev/map/shoreline",
            "ground-zero" => "https://tarkov.dev/map/ground-zero",
            "reserve" => "https://tarkov.dev/map/reserve",
            "streets-of-tarkov" => "https://tarkov.dev/map/streets-of-tarkov",
        ];

        return Inertia::render('Maps/Show', [
            "layoutDatas" => [...$this->layoutDatas, "user" => auth()->user()],
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
