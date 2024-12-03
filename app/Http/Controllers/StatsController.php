<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class StatsController extends Controller
{
    public function index() {
        return inertia('Stats', [
            'products' => Order::all()
        ]);
    }
}
