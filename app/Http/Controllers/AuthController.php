<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class AuthController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function login()
    {
        if (Auth::check()) return Redirect::back();
        return inertia('auth/Login');
    }

    public function register() {
        if (Auth::check()) return Redirect::back();
        return inertia('auth/Register');
    }

    public function verify(Request $request) {
        $validation = $request->validate([
            "email"    => "required",
            "password" => "required",
        ]);

        if (Auth::attempt($validation)) {
            $request->session()->regenerate();
            return redirect()->intended('/');
        }

        return Redirect::back()->withErrors(['error'=>'email atau password tidak benar']);
    }

    public function store(Request $request) {
        $validation = $request->validate([
            'name'     => "required",
            'email'    => "required",
            'password' => "required",
        ]);
        $validation['password'] = password_hash($validation['password'], PASSWORD_BCRYPT);

        try {
            User::create($validation);
            return redirect('/login');
        } catch (\Throwable $th) {
            return Redirect::back()->withErrors(['error'=>'username atau email sudah digunakan']);
        }
    }

    public function logout() {
        Auth::logout();
        return Redirect::back();
    }
}
