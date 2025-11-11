# Google OAuth Setup Guide for Drug GENIE

This guide will help you set up Google OAuth authentication for the Drug GENIE application.

## Prerequisites

- A Google Cloud Platform (GCP) account
- Drug GENIE backend and frontend running locally or deployed

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter project name: "Drug GENIE" (or your preferred name)
5. Click "Create"

## Step 2: Enable Google+ API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google+ API"
3. Click on it and press "Enable"

## Step 3: Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Select "External" user type (unless you have a Google Workspace)
3. Click "Create"
4. Fill in the required information:
   - **App name**: Drug GENIE
   - **User support email**: Your email
   - **Developer contact email**: Your email
5. Click "Save and Continue"
6. On the "Scopes" page, click "Add or Remove Scopes"
7. Add these scopes:
   - `.../auth/userinfo.email`
   - `.../auth/userinfo.profile`
8. Click "Save and Continue"
9. Add test users (your email addresses for testing)
10. Click "Save and Continue"

## Step 4: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application"
4. Configure:
   - **Name**: Drug GENIE Web Client
   - **Authorized JavaScript origins**:
     - `http://localhost:5000` (for local backend)
     - `http://localhost:5173` (for local frontend)
     - Add your production URLs if deployed
   - **Authorized redirect URIs**:
     - `http://localhost:5000/api/auth/google/callback` (for local)
     - Add your production backend URL + `/api/auth/google/callback` if deployed
5. Click "Create"
6. Copy the **Client ID** and **Client Secret** (you'll need these)

## Step 5: Configure Backend Environment Variables

1. Open your `backend/.env` file
2. Add the following variables:

```env
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_SECRET=your-client-secret-here
FRONTEND_URL=http://localhost:5173
```

Replace `your-client-id-here` and `your-client-secret-here` with the values from Step 4.

## Step 6: Configure Frontend Environment Variables (Optional)

If your backend is not running on `http://localhost:5000`, create or update `my-app/.env`:

```env
VITE_API_URL=http://localhost:5000
```

## Step 7: Restart Your Servers

1. Stop both backend and frontend servers (Ctrl+C)
2. Restart backend:
   ```bash
   cd backend
   npm run dev
   ```
3. Restart frontend:
   ```bash
   cd my-app
   npm run dev
   ```

## Step 8: Test Google Sign-In

1. Open your browser and go to `http://localhost:5173/login`
2. Click the "Sign in with Google" button
3. You should be redirected to Google's login page
4. Sign in with your Google account
5. Grant permissions to Drug GENIE
6. You should be redirected back to the Drug GENIE dashboard

## How It Works

### Backend Flow:
1. User clicks "Sign in with Google" button
2. Frontend redirects to `/api/auth/google`
3. Backend redirects to Google's OAuth consent screen
4. User authenticates and grants permissions
5. Google redirects back to `/api/auth/google/callback`
6. Backend creates or finds user in database
7. Backend generates JWT token
8. Backend redirects to frontend with token and user data

### Frontend Flow:
1. Frontend receives token and user data from URL parameters
2. Stores token and user in localStorage
3. Redirects to dashboard
4. User is now authenticated

## User Data Handling

When a user signs in with Google for the first time:
- A new account is created automatically
- Email and name are populated from Google profile
- Profile photo URL is saved
- Default values are set for:
  - Age: 0 (user can update later)
  - Blood Group: "Unknown"
  - Gender: "Other"
- A random password is generated (not used for Google login)

## Security Notes

1. **Never commit** your `.env` file with real credentials
2. The `.env.example` file contains placeholders only
3. JWT tokens are used for session management
4. Passwords for Google users are randomly generated and not used
5. All API routes are protected with JWT authentication

## Troubleshooting

### "Redirect URI mismatch" error
- Make sure your redirect URI in Google Cloud Console exactly matches: `http://localhost:5000/api/auth/google/callback`
- Check for trailing slashes or typos

### "Access blocked: This app's request is invalid"
- Complete the OAuth consent screen configuration
- Add your email as a test user
- Make sure Google+ API is enabled

### User redirected to login with error
- Check backend console for errors
- Verify environment variables are set correctly
- Ensure MongoDB is running and connected

### Token not being saved
- Check browser console for errors
- Verify localStorage is not disabled
- Check that callback URL parameters contain token and user data

## Production Deployment

When deploying to production:

1. Update Google Cloud Console:
   - Add production URLs to "Authorized JavaScript origins"
   - Add production callback URL to "Authorized redirect URIs"

2. Update backend `.env`:
   ```env
   FRONTEND_URL=https://your-production-frontend.com
   ```

3. Verify CORS settings in `backend/src/index.ts` include your production URL

4. Test the complete flow in production environment

## Support

If you encounter issues:
1. Check the backend console logs
2. Check the browser console for frontend errors
3. Verify all environment variables are set correctly
4. Ensure Google Cloud Console configuration matches your URLs
