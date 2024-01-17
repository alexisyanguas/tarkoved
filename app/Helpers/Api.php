<?php

namespace App\Helpers;

use Carbon\Carbon;

class Api
{

    public static function tarkovApi($method = "POST", $headers = [], $query = "")
    {
        $url = env('API_TARKOV_URL', "https://api.tarkov.dev/graphql");
        if ($url == null) return;


        $headers = ['Content-Type: application/json', ...$headers];

        $data = @file_get_contents($url, false, stream_context_create([
            'http' => [
                'method' => $method,
                'header' => $headers,
                'content' => json_encode(['query' => $query]),
            ]
        ]));

        return json_decode($data, true);
    }
}
