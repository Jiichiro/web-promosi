<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AboutController extends Controller
{
    public function about() {
        return inertia('About', [
            'isLogin' => Auth::check(),
            'user' => Auth::user()
        ]);
    }
}
