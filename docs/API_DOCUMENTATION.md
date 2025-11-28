# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Authentication

#### POST /api/auth/signup
Register a new user account.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Errors:**
- `400`: Validation errors or email already exists
- `500`: Server error

---

#### POST /api/auth/login
Authenticate and get JWT token.

**Request:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Errors:**
- `400`: Invalid credentials
- `500`: Server error

---

### User Profile

#### GET /api/user/me
Get current authenticated user's profile.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:**
- `401`: Unauthorized (missing or invalid token)
- `404`: User not found
- `500`: Server error

---

#### PUT /api/user/me
Update current user's profile.

**Headers:**
```
Authorization: Bearer <token>
```

**Request:**
```json
{
  "name": "John Updated"
}
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Updated",
  "email": "john@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:**
- `400`: Validation errors
- `401`: Unauthorized
- `404`: User not found
- `500`: Server error

---

### Tasks

#### GET /api/tasks
Get all tasks for the authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `search` (optional, string): Search in title and description
- `status` (optional, enum): Filter by status (`pending`, `in-progress`, `completed`)

**Example:**
```
GET /api/tasks?search=meeting&status=pending
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "user": "507f1f77bcf86cd799439010",
    "title": "Team Meeting",
    "description": "Discuss project progress",
    "status": "pending",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

**Errors:**
- `401`: Unauthorized
- `500`: Server error

---

#### POST /api/tasks
Create a new task.

**Headers:**
```
Authorization: Bearer <token>
```

**Request:**
```json
{
  "title": "New Task",
  "description": "Task description (optional)",
  "status": "pending"
}
```

**Status Values:**
- `pending` (default)
- `in-progress`
- `completed`

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "user": "507f1f77bcf86cd799439010",
  "title": "New Task",
  "description": "Task description",
  "status": "pending",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:**
- `400`: Validation errors (title required)
- `401`: Unauthorized
- `500`: Server error

---

#### GET /api/tasks/:id
Get a specific task by ID.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "user": "507f1f77bcf86cd799439010",
  "title": "Task Title",
  "description": "Task description",
  "status": "pending",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:**
- `401`: Unauthorized
- `404`: Task not found
- `500`: Server error

---

#### PUT /api/tasks/:id
Update a task.

**Headers:**
```
Authorization: Bearer <token>
```

**Request:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "status": "completed"
}
```

All fields are optional. Only include fields you want to update.

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "user": "507f1f77bcf86cd799439010",
  "title": "Updated Title",
  "description": "Updated description",
  "status": "completed",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:**
- `400`: Validation errors
- `401`: Unauthorized
- `404`: Task not found
- `500`: Server error

---

#### DELETE /api/tasks/:id
Delete a task.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "message": "Task deleted"
}
```

**Errors:**
- `401`: Unauthorized
- `404`: Task not found
- `500`: Server error

---

## Error Response Format

All errors follow this format:

```json
{
  "message": "Error message here"
}
```

For validation errors:
```json
{
  "errors": [
    {
      "msg": "Validation error message",
      "param": "fieldName",
      "location": "body"
    }
  ]
}
```

## Status Codes

- `200`: Success
- `201`: Created
- `400`: Bad Request (validation errors)
- `401`: Unauthorized (missing or invalid token)
- `404`: Not Found
- `500`: Internal Server Error

