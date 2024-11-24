<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'dash']);

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'verify']);

Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::post('/register', [AuthController::class, 'store']);

Route::get('/logout', [AuthController::class, 'logout']);

Route::inertia('/about', 'Mt');
Route::inertia('/features', 'Mt');
Route::inertia('/cart', 'Mt');