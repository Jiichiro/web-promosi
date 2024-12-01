<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guasrded = ['id'];

    protected $fillable = [
        'name',
        'category',
        'quantity',
        'price',
    ];
}
