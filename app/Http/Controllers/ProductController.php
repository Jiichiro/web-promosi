<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('product/view', [
            'login' => Auth::check(),
            'user' => Auth::user()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $validation = $request->validate([
            'name' => 'required',
            'category' => 'required',
            'variant' => 'required',
            'price' => 'required',
        ]);
        // dd($validation);
        Order::create($validation);
        return Redirect::back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $name)
    {
        return inertia('product/detail', [
            'url' => $name,
            'name' => Product::where('name', $name)->get(),
            'login' => Auth::check(),
            'user' => Auth::user(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
