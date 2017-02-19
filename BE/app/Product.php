<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class Product extends Model
{

    protected $fillable = [

        'category_id',
        'group_id',
        'title',
        'icon',
        'comment',
        'price',
        'discount_price',
        'producer',
        'available',
        'tips',
        'introduce',
        'standards',
        'details',
        'score_id',
        'exp_date',

    ];

}
