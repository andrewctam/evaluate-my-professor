package com.andrewtam

class LoginRequest(val username: String, val password: String)
class RegisterRequest(val username: String, val password: String, val email: String)
class CheckSessionRequest(val username: String, val sessionToken: String)

class FilteredReviewsRequest(
    val authorName: String,
    val schoolName: String,
    val profName: String,
)

class CreateReviewRequest(
    val authorUsername: String,
    val sessionToken: String,
    val schoolName: String,
    val profName: String,
    val text: String,
    val course: String,
    val rating: Int,
    val difficulty: Int,
    val amountLearned: Int,
    val lectureQuality: Int,
    val hrsPerWeek: Int    
)
class VoteRequest(
    val authorUsername: String,
    val sessionToken: String,
    val reviewId: String,
    val vote: Int
)
class CommentRequest(
    val authorUsername: String,
    val sessionToken: String,
    val reviewId: String,
    val text: String
)
class DeleteReviewRequest(
    val authorUsername: String,
    val sessionToken: String,
    val reviewId: String
)

class AddProfessorRequest(
    val username: String,
    val sessionToken: String,
    val schoolName: String,
    val profName: String
)