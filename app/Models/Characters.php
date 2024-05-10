<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Characters extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'spacies',
        'image',
        'url'
    ];

    public function character(): BelongsTo
    {
        return $this->belongsTo(Characters::class);
    }
}
