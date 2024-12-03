<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => 'admin',
            'level' => 'admin',
        ]);

        $product = [
            [
                'name' => 'myridr',
                'category' => 'money_changer',
                'quantity' => 'RM0 - RN30',
                'price' => 3000,
            ],
            [
                'name' => 'myridr',
                'category' => 'money_changer',
                'quantity' => 'RM31 – RM80',
                'price' => 5000,
            ],
            [
                'name' => 'myridr',
                'category' => 'money_changer',
                'quantity' => 'RM81 – RM150',
                'price' => 10000,
            ],
            [
                'name' => 'myridr',
                'category' => 'money_changer',
                'quantity' => 'RM151 – RM250',
                'price' => 15000,
            ],
            [
                'name' => 'myridr',
                'category' => 'money_changer',
                'quantity' => 'RM251 – RM300',
                'price' => 25000,
            ],
            [
                'name' => 'idrmyr',
                'category' => 'money_changer',
                'quantity' => 'RM0 – RM30',
                'price' => 5000,
            ],
            [
                'name' => 'idrmyr',
                'category' => 'money_changer',
                'quantity' => 'RM31 – RM100',
                'price' => 10000,
            ],
            [
                'name' => 'idrmyr',
                'category' => 'money_changer',
                'quantity' => 'RM101 – RM200',
                'price' => 15000,
            ],
            [
                'name' => 'idrmyr',
                'category' => 'money_changer',
                'quantity' => 'RM201 – RM300',
                'price' => 25000,
            ],
            [
                'name' => 'idrmyr',
                'category' => 'money_changer',
                'quantity' => 'RM301 – RM500',
                'price' => 30000,
            ],
            [
                'name' => 'paypalidr',
                'category' => 'money_changer',
                'quantity' => '$1 - $10',
                'price' => 7000,
            ],
            [
                'name' => 'paypalidr',
                'category' => 'money_changer',
                'quantity' => '$10.1 - $20',
                'price' => 15000,
            ],
            [
                'name' => 'paypalidr',
                'category' => 'money_changer',
                'quantity' => '$20.1 - $30',
                'price' => 37000,
            ],
            [
                'name' => 'paypalidr',
                'category' => 'money_changer',
                'quantity' => '$30.1 - $70',
                'price' => 75000,
            ],
            [
                'name' => 'paypalidr',
                'category' => 'money_changer',
                'quantity' => '$70.1 - $100',
                'price' => 105000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '10000',
                'price' => 12000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '15000',
                'price' => 17000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '20000',
                'price' => 22000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '25000',
                'price' => 27000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '30000',
                'price' => 32000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '35000',
                'price' => 37000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '40000',
                'price' => 42000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '45000',
                'price' => 47000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '50000',
                'price' => 52000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '55000',
                'price' => 57000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '60000',
                'price' => 62000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '65000',
                'price' => 67000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '70000',
                'price' => 72000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '75000',
                'price' => 77000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '80000',
                'price' => 82000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '90000',
                'price' => 92000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '90000',
                'price' => 92000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '100000',
                'price' => 102000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '125000',
                'price' => 127000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '150000',
                'price' => 152000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '200000',
                'price' => 202000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '250000',
                'price' => 257000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '300000',
                'price' => 302000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '400000',
                'price' => 402000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '500000',
                'price' => 502000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '600000',
                'price' => 602000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '700000',
                'price' => 702000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '750000',
                'price' => 752000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '800000',
                'price' => 802000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '900000',
                'price' => 902000,
            ],
            [
                'name' => 'gopay',
                'category' => 'topup_ewallet',
                'quantity' => '1000000',
                'price' => 1002000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '5000',
                'price' => 6000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '10000',
                'price' => 11000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '20000',
                'price' => 21000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '50000',
                'price' => 51000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '100000',
                'price' => 101000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '200000',
                'price' => 201000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '300000',
                'price' => 301000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '400000',
                'price' => 401000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '500000',
                'price' => 501000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '600000',
                'price' => 601000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '700000',
                'price' => 701000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '800000',
                'price' => 801000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '900000',
                'price' => 901000,
            ],
            [
                'name' => 'dana',
                'category' => 'topup_ewallet',
                'quantity' => '1000000',
                'price' => 1001000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '10000',
                'price' => 12000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '15000',
                'price' => 17000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '20000',
                'price' => 22000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '25000',
                'price' => 27000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '30000',
                'price' => 32000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '40000',
                'price' => 42000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '50000',
                'price' => 52000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '60000',
                'price' => 62000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '70000',
                'price' => 72000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '75000',
                'price' => 77000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '100000',
                'price' => 102000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '150000',
                'price' => 152000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '200000',
                'price' => 202000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '250000',
                'price' => 257000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '300000',
                'price' => 302000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '400000',
                'price' => 402000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '500000',
                'price' => 502000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '600000',
                'price' => 602000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '700000',
                'price' => 702000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '800000',
                'price' => 802000,
            ],
            [
                'name' => 'linkaja',
                'category' => 'topup_ewallet',
                'quantity' => '900000',
                'price' => 902000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '10000',
                'price' => 11000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '15000',
                'price' => 16000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '20000',
                'price' => 21000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '25000',
                'price' => 26000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '40000',
                'price' => 41000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '50000',
                'price' => 51000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '60000',
                'price' => 61000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '75000',
                'price' => 76000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '80000',
                'price' => 81000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '100000',
                'price' => 101000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '125000',
                'price' => 126000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '150000',
                'price' => 152000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '200000',
                'price' => 202000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '250000',
                'price' => 256000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '300000',
                'price' => 301000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '400000',
                'price' => 401000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '500000',
                'price' => 501000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '750000',
                'price' => 751000,
            ],
            [
                'name' => 'ovo',
                'category' => 'topup_ewallet',
                'quantity' => '1000000',
                'price' => 1001000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '5000',
                'price' => 6000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '10000',
                'price' => 11000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '20000',
                'price' => 21000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '50000',
                'price' => 51000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '100000',
                'price' => 101000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '150000',
                'price' => 151000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '300000',
                'price' => 301000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '300000',
                'price' => 301000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '500000',
                'price' => 501000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '570000',
                'price' => 751000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '1000000',
                'price' => 1001000,
            ],
            [
                'name' => 'googleplay',
                'category' => 'topup_games',
                'quantity' => '1500000',
                'price' => 1501000,
            ],
            [
                'name' => 'steam',
                'category' => 'topup_games',
                'quantity' => 6000,
                'price' => 7000
            ],
            [
                'name' => 'steam',
                'category' => 'topup_games',
                'quantity' => 8000,
                'price' => 9000
            ],
            [
                'name' => 'steam',
                'category' => 'topup_games',
                'quantity' => 12000,
                'price' => 14000
            ],
            [
                'name' => 'steam',
                'category' => 'topup_games',
                'quantity' => 45000,
                'price' => 48000
            ],
            [
                'name' => 'steam',
                'category' => 'topup_games',
                'quantity' => 60000,
                'price' => 64000
            ],
            [
                'name' => 'steam',
                'category' => 'topup_games',
                'quantity' => 90000,
                'price' => 95000
            ],
            [
                'name' => 'steam',
                'category' => 'topup_games',
                'quantity' => 120000,
                'price' => 127000
            ],
            [
                'name' => 'steam',
                'category' => 'topup_games',
                'quantity' => 250000,
                'price' => 262000
            ],
            [
                'name' => 'steam',
                'category' => 'topup_games',
                'quantity' => 400000,
                'price' => 415000
            ],
            [
                'name' => 'word',
                'category' => 'document',
                'quantity' => 'Buat baru',
                'price' => 3000
            ],
            [
                'name' => 'word',
                'category' => 'document',
                'quantity' => 'Daftar Isi',
                'price' => 3000
            ],
            [
                'name' => 'word',
                'category' => 'document',
                'quantity' => 'Formating',
                'price' => 10000
            ],
            [
                'name' => 'word',
                'category' => 'document',
                'quantity' => 'Cek Pagiarisme',
                'price' => 5000
            ],
            [
                'name' => 'pdf',
                'category' => 'document',
                'quantity' => 'Buat baru',
                'price' => 3000
            ],
            [
                'name' => 'pdf',
                'category' => 'document',
                'quantity' => 'Daftar Isi',
                'price' => 5000
            ],
            [
                'name' => 'pdf',
                'category' => 'document',
                'quantity' => 'Formating',
                'price' => 20000
            ],
            [
                'name' => 'pdf',
                'category' => 'document',
                'quantity' => 'Cek Pagiarisme',
                'price' => 2000
            ],
            [
                'name' => 'photo',
                'category' => 'foto_video',
                'quantity' => 'Hapus Background',
                'price' => 3000
            ],
            [
                'name' => 'photo',
                'category' => 'foto_video',
                'quantity' => 'Add Text',
                'price' => 5000
            ],
            [
                'name' => 'photo',
                'category' => 'foto_video',
                'quantity' => 'Color Grading',
                'price' => 17000
            ],
            [
                'name' => 'photo',
                'category' => 'foto_video',
                'quantity' => 'Ganti Background',
                'price' => 20000
            ],
            [
                'name' => 'video',
                'category' => 'foto_video',
                'quantity' => 'Cut And Merge Clip',
                'price' => 5000
            ],
            [
                'name' => 'video',
                'category' => 'foto_video',
                'quantity' => 'Add Text',
                'price' => 10000
            ],
            [
                'name' => 'video',
                'category' => 'foto_video',
                'quantity' => 'Add Music',
                'price' => 20000
            ],
            [
                'name' => 'video',
                'category' => 'foto_video',
                'quantity' => 'Add Transition',
                'price' => 20000
            ],
            [
                'name' => 'video',
                'category' => 'foto_video',
                'quantity' => 'Color Grading',
                'price' => 30000
            ],
            [
                'name' => 'video',
                'category' => 'foto_video',
                'quantity' => 'Add Subtitle',
                'price' => 50000
            ],
        ];
        foreach ($product as $produk) {
            Product::create($produk);
        }
    }
}
