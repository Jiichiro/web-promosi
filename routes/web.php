<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StatsController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'dash'])->name('home');
Route::get('/about', [AboutController::class, 'about']);

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'verify']);

Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::post('/register', [AuthController::class, 'store']);

Route::get('/logout', [AuthController::class, 'logout']);

Route::get('/cart', [CartController::class, 'index']);

Route::resource('product', ProductController::class);

Route::get('/stats', [StatsController::class, 'index']);
