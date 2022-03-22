<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create(['name' => 'aziz jad', 'email' => 'aziz@gmail.com' , 'type' => '1']);

        User::factory()->create(['name' => 'ramzy fakhfakh', 'email' => 'ramzyfakhfakh1@gmail.com' , 'type' => '1']);
    }
}
