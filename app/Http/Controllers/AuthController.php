<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class AuthController extends Controller
{
    public function login()
    {
        if (Auth::check()) return redirect()->route('home');
        return inertia('auth/Login');
    }

    public function register()
    {
        if (Auth::check()) return redirect()->route('home');
        return inertia('auth/Register');
    }

    public function verify(Request $request)
    {
        $validation = $request->validate([
            "email"    => "required|email",
            "password" => "required",
        ]);

        if (Auth::attempt($validation)) {
            $request->session()->regenerate();

            // Redirect ke halaman yang sebelumnya dicoba diakses, atau ke dashboard
            return redirect()->intended(route('home'));
        }

        return Redirect::back()->withErrors(['error' => 'Email atau password tidak benar']);
    }

    public function store(Request $request)
    {
        $validation = $request->validate([
            'name'     => "required",
            'email'    => "required",
            'password' => "required",
        ]);

        $validation['password'] = bcrypt($validation['password']);
        $validation['level'] = 'member';

        try {
            User::create($validation);
            return redirect('/login');
        } catch (\Throwable $th) {
            return Redirect::back()->withErrors(['error' => 'Terjadi kesalahan saat menyimpan data.']);
        }
    }

    public function logout()
    {
        Auth::logout();

        return Redirect::back();
    }
}
