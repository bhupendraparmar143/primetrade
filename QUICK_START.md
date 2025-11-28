# Quick Start Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Setup Steps

### 1. Clone and Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend (in a new terminal)
cd frontend
npm install
```

### 2. Configure Environment Variables

**Backend:**
```bash
cd backend
cp env.example .env
```

Edit `.env`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/primetrade
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
CLIENT_ORIGIN=http://localhost:5173
```

**Frontend:**
```bash
cd frontend
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start MongoDB

**Local MongoDB:**
```bash
# Make sure MongoDB is running
mongod
```

**Or use MongoDB Atlas:**
- Create a free account at https://www.mongodb.com/cloud/atlas
- Get your connection string
- Update `MONGO_URI` in backend `.env`

### 4. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

Backend will run on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend will run on `http://localhost:5173`

### 5. Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

### 6. Test the Application

1. **Register a new account:**
   - Click "Sign Up" or "Get Started"
   - Fill in name, email, and password
   - Submit the form

2. **Login:**
   - Use your credentials to login
   - You'll be redirected to the dashboard

3. **Explore Features:**
   - **Dashboard**: View profile and task statistics
   - **Tasks**: Create, read, update, and delete tasks
   - **Profile**: Update your profile information

## API Testing

### Using Postman

1. Import the Postman collection from `docs/POSTMAN_COLLECTION.json`
2. Set the `baseUrl` variable to `http://localhost:5000/api`
3. Start with the "Signup" or "Login" request
4. The token will be automatically saved to the `token` variable
5. Use other endpoints with the saved token

### Using cURL

**Signup:**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

**Get Profile (replace TOKEN with actual token):**
```bash
curl -X GET http://localhost:5000/api/user/me \
  -H "Authorization: Bearer TOKEN"
```

## Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check `MONGO_URI` in `.env`
- For MongoDB Atlas, check your IP whitelist

**Port Already in Use:**
- Change `PORT` in backend `.env`
- Or stop the process using port 5000

### Frontend Issues

**API Connection Error:**
- Ensure backend is running
- Check `VITE_API_URL` in frontend `.env`
- Check CORS settings in backend

**Build Errors:**
- Delete `node_modules` and reinstall
- Check Node.js version (v16+)

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Check [API_DOCUMENTATION.md](docs/API_DOCUMENTATION.md) for API details
- Review [SCALING_NOTES.md](docs/SCALING_NOTES.md) for production deployment

