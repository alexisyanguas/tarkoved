<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <title>{{ config('app.name', 'Tarkoved') }}</title>
    @inertiaHead

    <link rel="stylesheet" href="/build/assets/app-00c87a7b.css">
    <script src="/build/assets/app-757fa5df.js" type="module"></script>

    {{-- @viteReactRefresh --}}
    {{-- @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"]) --}}
</head>

<body>
    @inertia
</body>

</html>
