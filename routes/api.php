<?php

use App\Http\Controllers\Auth\TokenController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\ResetpasswordController;
use App\Http\Controllers\Auth\NewPasswordController;





Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/user/posts', function (Request $request) {
        return $request->user()->posts;
    });

    Route::delete('/auth/token', [TokenController::class, 'destroy']);
});

//login
Route::post('/login', [TokenController::class, 'login'])->name('login');
//logout
Route::post('/logout', [TokenController::class, 'logout'])->middleware('auth:sanctum');
//demande mdp
Route::post('/forgot-password', [NewPasswordController::class, 'forgotPassword']);
//changement de mdp
Route::post('/reset-password', [ResetpasswordController::class, 'reset']);
//update email 
Route::post('/update-email', [TokenController::class, 'change'])->name('change');
//update psw
Route::post('/update-password', [TokenController::class, 'changepswd'])->name('changepswd');
