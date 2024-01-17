<?php

use App\Http\Controllers\Auth\DiscordController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\TestController;
use App\Http\Controllers\Test\{
    AmmoController,
    MapController
};


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// https://discord.com/api/oauth2/authorize?client_id=1197214627549958234&response_type=code&redirect_uri=http%3A%2F%2Ftarkoved.test%2Fauth%2Fdiscord%2Fcallback&scope=identify
// Auth 
Route::get('/auth/redirect', [DiscordController::class, "redirectToProvider"]);
Route::get('/auth/discord/callback', [DiscordController::class, "handleProviderCallback"]);
Route::get('/logout', [DiscordController::class, "logout"])->name('logout');

Route::get('/', [TestController::class, "maps"])->name('maps');
Route::get('/home', function () {
    return Inertia::render('Welcome', [
        "layoutDatas" => [
            "title" => "Home",
            "page"  => "home",
            "user"  => auth()->user()
        ]
    ]);
})->name('home');


Route::prefix("test")->group(function () {
    Route::prefix("maps")->group(function () {
        Route::get("/", [MapController::class, "index"])->name("test.maps");
        Route::get("/{map}", [MapController::class, "maps"]);
    });
    Route::get("/ammo", [AmmoController::class, "index"])->name("test.ammo");
});
