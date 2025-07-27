<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Homework extends Model
{
     use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'lesson_id',
        'due_date',
    ];

    public function lesson(){
        return $this->belongsTo(Lesson::class, 'lesson_id', 'id');
    }

    public function submissions(){
        return $this->hasMany(HomeworkSubmission::class, 'homework_id', 'id');
    }

}
