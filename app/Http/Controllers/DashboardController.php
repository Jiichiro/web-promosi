<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function dash() {
        $isLogin = Auth::check();
        $user = Auth::user();
        // dd($isLogin, $user);

        return inertia('Dashboard', [
            'isLogin' => $isLogin,
            'user' => $user,
        ]);
    }
}
