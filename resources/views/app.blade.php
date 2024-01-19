<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>
        {{ config('app.name', 'Tarkoved') }}
    </title>
    <link href="/build/assets/app-3dbfa2ed.css" rel="stylesheet">
    <script src="/build/assets/app-79645224.js" type="module"></script>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    {{-- @viteReactRefresh --}}
    {{-- @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"]) --}}
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
