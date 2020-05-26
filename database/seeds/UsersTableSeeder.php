<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User([
            'name'     => 'Romel Indemne',
            'email'    => 'admin@admin.com',
            'password' => Hash::make('123456789'),
            'phone'    => '05012345678',
            'role'     => 1
        ]);
        $user->save();
        $user = new \App\User([
            'name'     => 'Test Account',
            'email'    => 'test@test.com',
            'password' => Hash::make('123456789'),
            'phone'    => '05012345678'
        ]);
        $user->save();
        $user = new \App\User([
            'name'     => 'zzzzzz',
            'email'    => 'zzz@zzz.com',
            'password' => Hash::make('123456789'),
            'phone'    => '05012345678'
        ]);
        $user->save();
    }
}
