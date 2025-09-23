# React Authentication Frontend

A modern, responsive authentication frontend built with React, TypeScript, and Tailwind CSS that integrates with the Laravel authentication API.

## Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Authentication**: Complete login/register system with token management
- **Protected Routes**: Automatic redirection based on authentication status
- **Cookie Management**: Secure token storage with js-cookie
- **API Integration**: Seamless communication with Laravel backend
- **React Router**: Client-side routing with protected routes

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **js-cookie** - Cookie management
- **React Context** - State management for authentication

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

## Project Structure

```
src/
├── components/             # React components
│   ├── Home.tsx           # Landing page
│   ├── Login.tsx          # Login form
│   ├── Register.tsx       # Registration form
│   ├── Dashboard.tsx      # Protected dashboard
│   └── ProtectedRoute.tsx # Route protection wrapper
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication context
├── lib/                   # Utility libraries
│   └── api.ts             # API client and auth functions
├── App.tsx                # Main app component with routing
└── main.tsx               # App entry point
```

## Authentication Flow

1. **Registration**: Users can create new accounts
2. **Login**: Existing users can sign in
3. **Token Management**: JWT tokens are stored in HTTP-only cookies
4. **Protected Routes**: Dashboard requires authentication
5. **Auto-redirect**: Users are redirected based on auth status
6. **Logout**: Secure logout with token cleanup

## API Integration

The frontend communicates with the Laravel backend at `http://localhost:8000/api`:

- **POST** `/register` - User registration
- **POST** `/login` - User login
- **POST** `/logout` - User logout
- **GET** `/me` - Get current user

## Environment Setup

Make sure your Laravel backend is running on `http://localhost:8000` before starting the frontend.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Home Page (`/`)
- Landing page with feature highlights
- Automatic redirect to dashboard if authenticated
- Links to login and register pages

### Login Page (`/login`)
- Email and password authentication
- Form validation and error handling
- Link to registration page

### Register Page (`/register`)
- User registration with name, email, and password
- Password confirmation validation
- Link to login page

### Dashboard Page (`/dashboard`)
- Protected route requiring authentication
- User information display
- Logout functionality
- Quick action buttons

## Authentication Context

The `AuthContext` provides:
- User state management
- Authentication status
- Login/logout functions
- Token management
- Loading states

## API Client

The API client (`lib/api.ts`) handles:
- HTTP requests to Laravel backend
- Automatic token attachment
- Error handling and token expiration
- Response interceptors

## Protected Routes

The `ProtectedRoute` component:
- Checks authentication status
- Redirects unauthenticated users to login
- Shows loading state during auth check
- Wraps protected components

## Styling

The application uses Tailwind CSS for styling with:
- Responsive design
- Modern UI components
- Consistent color scheme
- Accessibility features

## Security Features

- Token-based authentication
- Secure cookie storage
- Automatic token refresh
- Protected route handling
- CSRF protection (handled by Laravel)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- The app uses React Router for client-side routing
- All components are functional components with hooks
- TypeScript strict mode is enabled
- ESLint configuration follows React recommendations
- Vite provides fast HMR (Hot Module Replacement)

## Comparison with Next.js Frontend

This React frontend provides the same functionality as the Next.js frontend but with:
- **Client-side routing** instead of server-side routing
- **Vite** instead of Next.js build system
- **React Router** instead of Next.js App Router
- **Simpler setup** for pure React applications
- **Faster development** with Vite's HMR

Both frontends can work with the same Laravel backend API!