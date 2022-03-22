<?php

namespace App\Http\Controllers\Auth;
use  App\Mail\Resetpasswordmail;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Validation\Rules\Password as RulesPassword;
use App\Models\User;



class NewPasswordController extends Controller
{
    public function forgotPassword(Request $request)
    {
        $this->validate($request,[
            'email' => 'required|email'
        ]);
        $email = $request->email;

        if(User::where('email', $email)->doesntExist()){
            return response(['message'=>'Email Does not exists.'], 200);
        }
        $token = Str::random(10);

        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => now()->addHours(1)
        ]);

        // Send Mail
        Mail::send('emails.simple-mail', ['token'=>$token], function ($message) use($email){
            $message->to($email);
            $message->subject('Reset Your Password');
        });

        return response(['message' => 'Check your email.'], 200);

    }


}