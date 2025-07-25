<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;

class Cours extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'content',
        'teacher_id',
        'file',
    ];

    // Relationship: Cours belongs to a Teacher (User)
    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }
}
