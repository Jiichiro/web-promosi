<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StatsController extends Controller
{
    public function index() {
        $user = Auth::user();
        $userlevel = $user?->level;
        if($userlevel != 'admin') return redirect()->back();
        return inertia('Stats', [
            'orders' => Order::all(),
            'lastOrders' => Order::orderBy('created_at','desc')->take(10)->get(),
            'user' => $user,
            'login' => Auth::check()
        ]);
    }
}
