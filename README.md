# AI Enterprise Hub

A full-stack application with React frontend and FastAPI backend.

## Project Structure

```
├── frontend/          # React application
├── backend/           # FastAPI server
├── vercel.json        # Vercel deployment configuration
└── .env.example       # Environment variables template
```

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- Python 3.8+
- MongoDB

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Variables**
   - Copy `.env.example` to `.env` and update values
   - Create `frontend/.env.local` with:
     ```
     REACT_APP_BACKEND_URL=http://localhost:8000
     ```

### Running the Application

1. **Start Backend** (from backend directory):
   ```bash
   python -m uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Start Frontend** (from frontend directory):
   ```bash
   npm start
   ```

3. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

## Deployment

### GitHub Setup

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### Vercel Deployment

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Environment Variables**:
   Set these in Vercel dashboard:
   ```
   MONGO_URL=your_production_mongodb_url
   DB_NAME=your_production_database_name
   CORS_ORIGINS=https://yourdomain.vercel.app
   REACT_APP_BACKEND_URL=https://yourdomain.vercel.app/api
   ```

3. **Deploy**:
   - Vercel will automatically build and deploy
   - The `vercel.json` configuration handles routing

## Features

- ✅ React frontend with modern UI
- ✅ FastAPI backend with CORS support
- ✅ MongoDB integration
- ✅ Custom favicon (Citius AI branding)
- ✅ Production-ready build configuration
- ✅ Vercel deployment ready

## Troubleshooting

### Common Issues

- **Ensure MongoDB is running** for local development
- **Check environment variables** are properly set
- **Verify CORS origins** include your domain
- **Check Vercel function logs** for backend issues

### Deployment Issues

- **npm peer dependency errors**: Fixed with `.npmrc` files using `--legacy-peer-deps`
- **React 19 compatibility**: The project uses React 19 which may have peer dependency conflicts with some packages
- **Build failures**: Ensure all environment variables are set in Vercel dashboard
- **API routing issues**: Check that `vercel.json` routes are properly configured

### If deployment still fails:

1. Check Vercel build logs for specific errors
2. Ensure all required environment variables are set
3. Verify MongoDB connection string is valid
4. Test the production build locally: `npm run build` in frontend directory