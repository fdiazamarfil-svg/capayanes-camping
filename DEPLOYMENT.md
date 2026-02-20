# Deployment Guide - Capayanes Camping

This guide explains how to deploy the Capayanes Camping website to Netlify.

## Overview

This is a full-stack application with:
- **Frontend**: React application (Create React App with Craco)
- **Backend**: FastAPI with MongoDB (needs to be deployed separately)

## Frontend Deployment to Netlify

### Prerequisites
- GitHub account connected to Netlify
- Backend API already deployed (or you can deploy it later and update the environment variable)

### Step 1: Connect Repository to Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Log in with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select "GitHub" and authorize Netlify to access your repositories
5. Choose the `capayanes-camping` repository

### Step 2: Configure Build Settings

Netlify will automatically detect the `netlify.toml` configuration file in your repository. The configuration is already set up with:

- **Base directory**: `frontend/`
- **Build command**: `npm install --legacy-peer-deps && npm run build && cp _redirects build/_redirects`
- **Publish directory**: `build/`
- **Node version**: 18

**You don't need to manually configure these settings** - they're automatically loaded from `netlify.toml`.

### Step 3: Set Environment Variables

In the Netlify dashboard for your site:

1. Go to "Site settings" → "Environment variables"
2. Add the following variable:
   - **Key**: `REACT_APP_BACKEND_URL`
   - **Value**: Your backend API URL (e.g., `https://api.capayanes.com` or your deployed backend URL)

### Step 4: Deploy

1. Click "Deploy site"
2. Netlify will:
   - Clone your repository
   - Install dependencies
   - Build your React application
   - Deploy the production build

Your site will be available at a Netlify URL (e.g., `https://your-site-name.netlify.app`)

### Step 5: Custom Domain (Optional)

If you have a custom domain:

1. Go to "Domain settings" in your Netlify dashboard
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS settings

## Backend Deployment

The backend (FastAPI) needs to be deployed separately. Recommended platforms:
- **Render**: Good for Python applications
- **Railway**: Easy deployment with MongoDB support
- **Heroku**: Classic choice for Python apps
- **AWS/GCP/Azure**: For production environments

### Backend Environment Variables

Your backend requires:
- `MONGO_URL`: MongoDB connection string
- `DB_NAME`: Database name
- Other environment variables from your `.env` file

### CORS Configuration

Make sure your backend API allows requests from your Netlify domain. In your FastAPI app, configure CORS:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://your-site-name.netlify.app",
        "http://localhost:3000",  # for local development
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Continuous Deployment

Netlify automatically deploys your site whenever you push changes to your main branch. You can also:

- Create deploy previews for pull requests
- Set up branch deploys for testing
- Roll back to previous deployments

## Troubleshooting

### Build Fails

- Check the build logs in Netlify dashboard
- Verify that `netlify.toml` is present in the repository root
- Ensure Node.js version 18 is compatible with your dependencies

### API Calls Failing

- Verify `REACT_APP_BACKEND_URL` is set correctly
- Check that CORS is configured on your backend
- Ensure your backend is deployed and accessible

### 404 Errors on Refresh

- The `_redirects` file should handle this automatically
- Verify that `_redirects` is copied to the build directory

## Files Added for Netlify Deployment

- `/netlify.toml`: Main Netlify configuration
- `/frontend/_redirects`: React Router redirect rules
- `/DEPLOYMENT.md`: This deployment guide

## Need Help?

- [Netlify Documentation](https://docs.netlify.com/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [Netlify Community](https://answers.netlify.com/)
