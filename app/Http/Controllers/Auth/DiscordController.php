<?php

namespace App\Http\Controllers\Auth;

use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Controller;
use App\Models\User;

class DiscordController extends Controller
{
    /**
     * Redirect the user to the Discord authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('discord')->redirect();
    }

    /**
     * Obtain the user information from Discord.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback()
    {
        $discordUser = Socialite::driver('discord')->stateless()->user();

        $user = User::updateOrCreate([
            'discord_id' => $discordUser->id,
        ], [
            'name' => $discordUser->name,
            'avatar' => $discordUser->avatar,
            'email' => $discordUser->email,
        ]);

        auth()->login($user, true);

        return redirect()->route('test.maps');
    }

    /**
     * Log the user out of the application.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        auth()->logout();

        return redirect()->route('test.maps');
    }
}
