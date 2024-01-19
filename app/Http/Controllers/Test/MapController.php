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
            "customs" => [
                "mapgenie" => [
                    "link" => "https://mapgenie.io/tarkov/maps/customs",
                    "title" => "MapGenie"
                ],
                "tarkovdev" => [
                    "link" => "https://tarkov.dev/map/customs",
                    "title" => "Tarkov.dev"
                ],
            ],
            "factory" => [
                "mapgenie" => [
                    "link" => "https://mapgenie.io/tarkov/maps/factory",
                    "title" => "MapGenie"
                ],
                "tarkovdev" => [
                    "link" => "https://tarkov.dev/map/factory",
                    "title" => "Tarkov.dev"
                ],
            ],
            "woods" => [
                "mapgenie" => [
                    "link" => "https://mapgenie.io/tarkov/maps/woods",
                    "title" => "MapGenie"
                ],
                "tarkovdev" => [
                    "link" => "https://tarkov.dev/map/woods",
                    "title" => "Tarkov.dev"
                ],
            ],
            "interchange" => [
                "mapgenie" => [
                    "link" => "https://mapgenie.io/tarkov/maps/interchange",
                    "title" => "MapGenie"
                ],
                "tarkovdev" => [
                    "link" => "https://tarkov.dev/map/interchange",
                    "title" => "Tarkov.dev"
                ],
            ],
            "lighthouse" => [
                "mapgenie" => [
                    "link" => "https://mapgenie.io/tarkov/maps/lighthouse",
                    "title" => "MapGenie"
                ],
                "tarkovdev" => [
                    "link" => "https://tarkov.dev/map/lighthouse",
                    "title" => "Tarkov.dev"
                ],
            ],
            "reserve" => [
                "mapgenie" => [
                    "link" => "https://mapgenie.io/tarkov/maps/reserve",
                    "title" => "MapGenie"
                ],
                "tarkovdev" => [
                    "link" => "https://tarkov.dev/map/reserve",
                    "title" => "Tarkov.dev"
                ],
            ],
            "shoreline" => [
                "mapgenie" => [
                    "link" => "https://mapgenie.io/tarkov/maps/shoreline",
                    "title" => "MapGenie"
                ],
                "tarkovdev" => [
                    "link" => "https://tarkov.dev/map/shoreline",
                    "title" => "Tarkov.dev"
                ],
            ],
            "streets-of-tarkov" => [
                "mapgenie" => [
                    "link" => "https://mapgenie.io/tarkov/maps/streets-of-tarkov",
                    "title" => "MapGenie"
                ],
                "tarkovdev" => [
                    "link" => "https://tarkov.dev/map/streets-of-tarkov",
                    "title" => "Tarkov.dev"
                ],
            ],
            "the-lab" => [
                "mapgenie" => [
                    "link" => "https://mapgenie.io/tarkov/maps/the-lab",
                    "title" => "MapGenie"
                ],
                "tarkovdev" => [
                    "link" => "https://tarkov.dev/map/the-lab",
                    "title" => "Tarkov.dev"
                ],
            ],

            // "interchange" => "https://tarkov.dev/map/interchange",
            // "factory" => "https://tarkov.dev/map/factory",
            // "woods" => "https://mapgenie.io/tarkov/maps/woods",
            // "the-lab" => "https://tarkov.dev/map/the-lab",
            // "lighthouse" => "https://tarkov.dev/map/lighthouse",
            // "shoreline" => "https://tarkov.dev/map/shoreline",
            // "ground-zero" => "https://mapgenie.io/tarkov/maps/ground-zero",
            // "reserve" => "https://tarkov.dev/map/reserve",
            // "streets-of-tarkov" => "https://tarkov.dev/map/streets-of-tarkov",
        ];
        // $content = file_get_contents($links[$map] ?? null);
        // if (!$content)
        //     return redirect()->route('maps.index');


        return Inertia::render('Maps/Show', [
            "layoutDatas" => [...$this->layoutDatas, "user" => auth()->user()],
            "map" => $links[$map] ?? null,
            // "content" => $content
        ]);
    }

    private function removeMapsInMapsJson($maps = [], $mapToRemove = [])
    {
        return array_filter($maps, function ($map) use ($mapToRemove) {
            return !in_array($map['normalizedName'], $mapToRemove);
        });
    }
}
