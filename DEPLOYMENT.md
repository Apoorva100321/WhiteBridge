# Vercel Deployment Guide

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)
- Your project code pushed to the repository

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import Project to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your repository
   - Vercel will auto-detect Next.js

3. **Configure Project Settings**
   - **Root Directory**: Set to `template-2-main` (since your project is nested)
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - These are typically in `.env.local` file

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to project directory**
   ```bash
   cd template-2-main
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production: `vercel --prod`

## Important Notes

### Root Directory Configuration
Since your project is nested in `template-2-main/template-2-main/`, you need to set the **Root Directory** in Vercel to `template-2-main` so it knows where your `package.json` is located.

### Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (Next.js default)
- **Install Command**: `npm install`

### File Size Limits
- Vercel has a 50MB limit for serverless functions
- Large files in `public/` folder are fine
- Make sure your PDF files and images are optimized

### Environment Variables
If you have any environment variables, add them in:
- Vercel Dashboard → Project Settings → Environment Variables

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### Root Directory Issues
- If build fails, check Root Directory setting
- Should be set to `template-2-main` (the folder containing `package.json`)

### Large Files
- Optimize images before committing
- Consider using Next.js Image optimization
- PDF files in `public/` are served as static files

## Post-Deployment

1. **Custom Domain** (optional)
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed

2. **Environment Variables**
   - Add production environment variables
   - Redeploy if needed

3. **Monitoring**
   - Check Vercel Analytics
   - Monitor build logs
   - Set up error tracking if needed

## Quick Deploy Commands

```bash
# Development deployment
vercel

# Production deployment
vercel --prod

# Preview deployment
vercel --prod --yes
```

