<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'cours_id',
        'order',
    ];

    public function cours(){
        return $this->belongsTo(Cours::class, 'cours_id', 'id');
    }

    public function homeworks(){
        return $this->hasMany(Homework::class, 'lesson_id', 'id');
    }

    public function progresses(){
        return $this->hasMany(Progress::class, 'lesson_id', 'id');
    }
}
