# react-test-itwox

# Project Overview

### This project is a React application built with TypeScript, designed to showcase a simple authentication flow and fetch data from external APIs to display on different screens. The app includes three main screens - Home, Dashboard, and Sign In.

## Folder Structure

The project follows a well-organized folder structure:

### src: Main source code directory.

### components: Reusable UI components.

#### Dashboard.tsx: Component responsible for rendering posts and comments fetched from external APIs. Utilizes pagination and showcases post details in cards.

#### NavBar1.tsx: Navigation bar component, displaying links based on user authentication status.

#### PostCard.tsx: Component to display individual post details within the Dashboard.

#### SignIn.tsx: Component providing a simple form for user login.

#### api.ts: File containing functions for fetching posts and comments using the react-query library.

### context: Contains the application's context logic for user authentication.

#### AuthContext.tsx: Context provider and hook for managing user authentication state.

### pages: React components representing different screens of the application.

#### HomePage.tsx: Home screen component rendering the navigation bar.

#### DashboardPage.tsx: Dashboard screen component, requiring user authentication and displaying the Dashboard component.

#### SignInPage.tsx: Sign In screen component rendering the SignIn component.

### App.tsx: Main entry point of the application, routing between different pages.

### index.tsx: Application entry point, where AuthContext is wrapped around the entire app.

### public: Public assets and HTML template.

Getting Started
To run the project locally, follow these steps:

Clone the repository: git clone `[https://github.com/sachinCodes98/react-test-itwox]`
Navigate to the project directory: cd <project-directory>
Install dependencies: npm install
Run the development server: npm start
Dependencies
The project utilizes several dependencies, including:

React
TypeScript
React Router DOM for navigation
React Query for data fetching
Bootstrap for styling
Ensure these dependencies are installed and up to date before running the application.

Authentication
User authentication is managed through the AuthContext. The AuthProvider wraps the entire application, providing state and functions to manage user login and logout.

Data Fetching
The Dashboard component fetches data from two external APIs - Posts and Comments, utilizing the react-query library for seamless data management.
