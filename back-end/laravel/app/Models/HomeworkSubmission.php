<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeworkSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'submission',
        'grade',
        'feedback',
        'student_id',
        'homework_id',
        'submitted_at',
        'completed_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'student_id', 'id');
    }

    public function homework()
    {
        return $this->belongsTo(Homework::class, 'homework_id', 'id');
    }
}
