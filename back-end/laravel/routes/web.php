<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/api/auth/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('/api/auth/me', [AuthController::class, 'me']);
    Route::post('/api/auth/logout', [AuthController::class, 'logout']);
    Route::post('/api/auth/refresh', [AuthController::class, 'refresh']);
});

