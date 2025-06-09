# Instagram Clone Setup Guide

This is a comprehensive Instagram clone built with Next.js, TypeScript, Firebase, and Tailwind CSS.

## Features
- User authentication (sign up/login)
- Create and view posts
- Like and comment on posts
- Follow/unfollow users
- Stories functionality
- Real-time chat messaging
- Dark mode support
- Responsive design
- Image upload and compression
- Search functionality
- Explore users

## Prerequisites
- Node.js (v14 or higher)
- Firebase account
- Git

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd instagram-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Setup

#### Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Follow the setup wizard

#### Enable Authentication
1. In your Firebase project, go to Authentication
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" authentication

#### Setup Firestore Database
1. Go to Firestore Database
2. Click "Create database"
3. Choose "Start in test mode" (you can configure security rules later)
4. Create two collections:
   - `users`
   - `userList`

#### Setup Firebase Storage
1. Go to Storage
2. Click "Get started"
3. Create three folders:
   - `posts`
   - `profilePhotos` 
   - `stories`

#### Get Firebase Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon to add a web app
4. Register your app
5. Copy the Firebase configuration object

### 4. Configure Environment Variables

Update `util/firbaseConfig.ts` with your Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### 5. Setup Guest Account (Optional)

Update `util/guestAccess.ts` with guest credentials:

```typescript
const guestAccess = () => {
  const email = 'guest@yourdomain.com';
  const password = 'your-guest-password';
  return { email, password };
};
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── components/          # React components
│   ├── header/         # Header components
│   ├── homePage/       # Home page components
│   ├── profilePages/   # Profile page components
│   ├── InboxPage/      # Chat/messaging components
│   ├── loadingComps/   # Loading components
│   └── svgComps/       # SVG icon components
├── hooks/              # Custom React hooks
├── pages/              # Next.js pages
├── styles/             # CSS styles
├── util/               # Utility functions
│   ├── atoms.ts        # Jotai state management
│   ├── firbaseConfig.ts # Firebase configuration
│   └── ...             # Other utilities
└── public/             # Static assets
```

## Key Technologies

- **Next.js** - React framework with SSR
- **TypeScript** - Type safety
- **Firebase** - Backend as a Service
  - Authentication
  - Firestore (NoSQL database)
  - Storage (file uploads)
- **Jotai** - State management
- **Tailwind CSS** - Styling
- **React Hooks** - Component logic

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project can be deployed to platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Firebase Hosting

Make sure to configure your environment variables in your deployment platform.

## Security Notes

- Configure Firebase Security Rules for production
- Set up proper CORS policies
- Use environment variables for sensitive data
- Enable Firebase App Check for additional security

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please respect Instagram's terms of service and intellectual property.