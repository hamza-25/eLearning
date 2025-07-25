<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Enroll extends Model
{
    use HasFactory;

    protected $fillable = [
        'cours_id',
        'student_id',
    ];

    public function cours()
    {
        return $this->belongsTo(Cours::class);
    }

    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }
}
