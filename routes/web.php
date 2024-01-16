<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Test\{
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

Route::get('/', [TestController::class, "maps"])->name('maps');
Route::get('/home', function () {
    return Inertia::render('Welcome', [
        "layoutDatas" => [
            "title" => "Home",
            "page" => "home",
        ]
    ]);
})->name('home');


Route::prefix("test")->group(function () {
    Route::prefix("maps")->group(function () {
        Route::get("/", [MapController::class, "index"])->name("test.maps");
        Route::get("/{map}", [MapController::class, "maps"]);
    });
});
