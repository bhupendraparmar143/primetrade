# Primetrade.ai - Full-Stack Web Application

A scalable web application with authentication, dashboard, and task management built with React, Node.js, Express, and MongoDB.

## Features

- ✅ **Authentication**: JWT-based signup/login with password hashing
- ✅ **Protected Routes**: Secure dashboard and profile pages
- ✅ **User Profile**: View and update user information
- ✅ **Task Management**: Full CRUD operations with search and filter
- ✅ **Responsive Design**: Modern UI with Tailwind CSS
- ✅ **API Integration**: Axios with interceptors for token management

## Tech Stack

### Frontend
- React 18
- React Router v6
- Tailwind CSS
- Axios
- Zustand (state management)
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs (password hashing)
- express-validator (input validation)

## Project Structure

```
Primetrade.ai/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js          # MongoDB connection
│   │   ├── middleware/
│   │   │   ├── auth.js        # JWT authentication middleware
│   │   │   └── errorHandler.js # Error handling middleware
│   │   ├── models/
│   │   │   ├── User.js        # User model
│   │   │   └── Task.js         # Task model
│   │   ├── routes/
│   │   │   ├── auth.js        # Authentication routes
│   │   │   ├── user.js        # User profile routes
│   │   │   └── tasks.js       # Task CRUD routes
│   │   ├── utils/
│   │   │   └── generateToken.js # JWT token generation
│   │   ├── app.js             # Express app configuration
│   │   └── server.js          # Server entry point
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx         # Main layout with navigation
│   │   │   ├── ProtectedRoute.jsx # Route protection component
│   │   │   └── TaskModal.jsx      # Task create/edit modal
│   │   ├── pages/
│   │   │   ├── Landing.jsx    # Landing page
│   │   │   ├── Register.jsx   # Registration page
│   │   │   ├── Login.jsx      # Login page
│   │   │   ├── Dashboard.jsx  # Dashboard with stats
│   │   │   ├── Profile.jsx    # User profile page
│   │   │   └── Tasks.jsx      # Tasks CRUD page
│   │   ├── services/
│   │   │   └── api.js         # Axios API configuration
│   │   ├── store/
│   │   │   └── authStore.js   # Authentication state management
│   │   ├── App.jsx            # Main app component with routes
│   │   ├── main.jsx           # React entry point
│   │   └── index.css          # Global styles
│   ├── .env.example
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/primetrade
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
CLIENT_ORIGIN=http://localhost:5173
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update `.env` with your API URL:
```env
VITE_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### POST /api/auth/signup
Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### POST /api/auth/login
Login with email and password.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### User Endpoints

#### GET /api/user/me
Get current user profile (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "_id": "user-id",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### PUT /api/user/me
Update current user profile (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "John Updated"
}
```

**Response:**
```json
{
  "_id": "user-id",
  "name": "John Updated",
  "email": "john@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### Task Endpoints

#### GET /api/tasks
Get all tasks for the authenticated user (supports search and filter).

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `search` (optional): Search in title and description
- `status` (optional): Filter by status (`pending`, `in-progress`, `completed`)

**Example:**
```
GET /api/tasks?search=meeting&status=pending
```

**Response:**
```json
[
  {
    "_id": "task-id",
    "user": "user-id",
    "title": "Task title",
    "description": "Task description",
    "status": "pending",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### POST /api/tasks
Create a new task (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Task title",
  "description": "Task description (optional)",
  "status": "pending" // optional: pending, in-progress, completed
}
```

**Response:**
```json
{
  "_id": "task-id",
  "user": "user-id",
  "title": "Task title",
  "description": "Task description",
  "status": "pending",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### GET /api/tasks/:id
Get a specific task by ID (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "_id": "task-id",
  "user": "user-id",
  "title": "Task title",
  "description": "Task description",
  "status": "pending",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### PUT /api/tasks/:id
Update a task (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed"
}
```

**Response:**
```json
{
  "_id": "task-id",
  "user": "user-id",
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### DELETE /api/tasks/:id
Delete a task (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "message": "Task deleted"
}
```

## Postman Collection

A Postman collection is available in the `docs` folder. Import it into Postman to test all API endpoints.

## Scaling Considerations for Production

### Frontend-Backend Integration

1. **API Gateway & Load Balancing**
   - Use an API gateway (AWS API Gateway, Kong, or Nginx) to route requests
   - Implement load balancing across multiple backend instances
   - Use CDN for static assets

2. **Caching Strategy**
   - Implement Redis for session management and caching
   - Cache frequently accessed data (user profiles, task lists)
   - Use HTTP caching headers for API responses

3. **Database Optimization**
   - Implement database indexing (already done for user email, task user/status)
   - Use database connection pooling
   - Consider read replicas for MongoDB
   - Implement pagination for large datasets

4. **Authentication & Security**
   - Implement refresh tokens for better security
   - Add rate limiting to prevent abuse
   - Use HTTPS in production
   - Implement CORS properly for production domains
   - Add request validation and sanitization

5. **Error Handling & Monitoring**
   - Implement centralized logging (Winston, Pino)
   - Use error tracking services (Sentry, Rollbar)
   - Set up monitoring and alerting (Prometheus, Grafana)
   - Implement health check endpoints

6. **Code Organization**
   - Separate concerns (controllers, services, repositories)
   - Implement dependency injection
   - Use environment-based configuration
   - Add comprehensive testing (unit, integration, e2e)

7. **Deployment**
   - Use containerization (Docker)
   - Implement CI/CD pipelines
   - Use orchestration (Kubernetes, Docker Swarm)
   - Set up staging and production environments

8. **Performance**
   - Implement request compression (gzip)
   - Optimize database queries
   - Use GraphQL for flexible data fetching (optional)
   - Implement lazy loading and code splitting in frontend

9. **Scalability Patterns**
   - Microservices architecture for large-scale applications
   - Message queues for async processing (RabbitMQ, AWS SQS)
   - Event-driven architecture for real-time features
   - Horizontal scaling with stateless services

## Development

### Running in Development Mode

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

### Building for Production

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## License

MIT

