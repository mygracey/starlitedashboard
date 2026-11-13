# Starlite Dashboard

### A Student-Centred Educational Dashboard Built with React.js and Firebase

Starlite Dashboard is a modern, student-focused web application built to provide authenticated students with a personalised digital dashboard.

Developed with React.js and Firebase, the application demonstrates practical frontend engineering, authentication state management, client-side route protection and cloud database integration.

The project focuses on creating a straightforward and accessible digital experience while applying modern web development technologies to an educational use case.

**Live Application:** [https://starlitedashboard.onrender.com](https://starlitedashboard.onrender.com)

---

## 1. Project Overview

Educational applications need more than attractive interfaces. They require a reliable way to manage users, authenticate students and present relevant information to the appropriate users.

Starlite Dashboard explores this requirement through a React-based dashboard connected to Firebase services.

Students can create accounts, authenticate themselves and access their personalised dashboard.

The application uses Firebase Authentication to manage user identity and Firebase Realtime Database to support cloud-based student information management.

The dashboard is intentionally designed around simplicity, usability and clarity rather than unnecessary interface complexity.

## 2. Core Features

- **Student Registration:** Allows students to create accounts using Firebase Authentication.
- **Student Login:** Authenticates registered students before granting access to the dashboard.
- **Authentication State Management:** Uses Firebase's `onAuthStateChanged` listener to monitor changes in authentication status.
- **Dashboard Route Protection:** Prevents unauthenticated users from accessing the dashboard through client-side authentication checks.
- **Personalised Dashboard:** Provides an authenticated student with a personalised dashboard experience.
- **Student Information Management:** Supports student information, including relevant personal and academic details.
- **Cloud Database Integration:** Uses Firebase Realtime Database for student information storage and retrieval.
- **Responsive User Interface:** Provides a layout designed to accommodate different screen sizes.

## 3. Technology Stack

The application was developed using the following technologies:

| Technology       | Version    | Application                           |
| ---------------- | ---------- | ------------------------------------- |
| React            | 19.3.1     | Component-based UI development        |
| JavaScript       | ES Modules | Application logic and interactivity   |
| HTML5            | —          | Semantic application structure        |
| CSS3             | —          | Interface styling and responsiveness  |
| Firebase         | 13.2.0     | Authentication and database services  |
| React Router DOM | 6.30.6     | Client-side navigation and routing    |
| React Icons      | 5.7.0      | Interface icons                       |
| Vite             | 8.3.6      | Development server and build tooling  |
| Oxlint           | 1.90.0     | Code linting                          |
| Git & GitHub     | —          | Version control and source management |
| Render           | —          | Application deployment                |

## 4. Application Architecture

Starlite Dashboard follows a React frontend and Firebase backend-services architecture.

React handles the presentation layer, component rendering, application interactions and navigation.

Firebase provides authentication and cloud database functionality.

### Authentication Workflow

The authentication workflow follows these steps:

1. A student registers or logs into an existing account.
2. Firebase Authentication processes the authentication request.
3. The application uses `onAuthStateChanged` to listen for authentication state changes.
4. When Firebase confirms an authenticated user, the application receives the user's authentication object.
5. The dashboard access logic uses the authentication state to determine whether the student can access the protected dashboard.
6. The authenticated user's UID can be used to retrieve the corresponding student information from Firebase Realtime Database.

### Why `onAuthStateChanged`?

Firebase authentication state is asynchronous. Checking authentication immediately when a component renders can produce inaccurate results because Firebase may not have completed its initial authentication-state check.

Using `onAuthStateChanged` provides a reliable way to respond to authentication-state changes.

It also allows the application to respond when a user logs in, logs out or has an existing authentication session restored.

This makes it useful for managing authenticated application experiences.

## 5. Firebase Integration and Data Management

Firebase is used as the backend service for authentication and student data management.

### Firebase Authentication

Firebase Authentication handles student account registration and login.

The application listens for authentication-state changes to determine whether a user is authenticated before granting access to the dashboard.

### Firebase Realtime Database

Firebase Realtime Database provides cloud-based storage for student information.

A simplified representation of a possible student data structure is:

```text
users/
  └── userUID/
       ├── fullName
       ├── email
       ├── age
       ├── studentClass
       ├── schoolSession
       └── createdAt
```

The Firebase Authentication UID provides a unique identifier that can associate student records with individual accounts.

This structure supports organised, user-specific data retrieval.

### Database Security

Client-side authentication checks help control the user experience, but they are not a replacement for backend security.

Firebase Realtime Database Security Rules should independently enforce authentication requirements and restrict access to authorised user records.

For example, an appropriately configured rule can restrict access to a user's own database record using their authenticated UID.

## 6. Routing and Navigation

React Router DOM is used for client-side navigation.

The application uses authentication state to determine access to the dashboard.

This approach helps maintain a distinction between publicly accessible authentication pages and the authenticated student dashboard.

## 7. Development Setup

To run the project locally, follow these steps.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm
- Git

You will also need a Firebase project with Authentication and Realtime Database configured.

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate into the Project Directory

```bash
cd schooldashboard
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Configure Firebase

Create or use an existing Firebase project.

Enable the following services:

- Firebase Authentication.
- Firebase Realtime Database.

Configure the Firebase application credentials according to the configuration structure used in the project.

Ensure that database security rules are appropriately configured before allowing real users to access student information.

### Step 5: Start the Development Server

```bash
npm run dev
```

Vite will start the development server and provide a local URL for accessing the application.

### Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Generates the production build        |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs Oxlint code analysis             |

## 8. Production Build

The application uses Vite to generate an optimised production build.

To generate the production files:

```bash
npm run build
```

The resulting production assets are generated in the `dist` directory.

The application is deployed and publicly accessible through Render.

**Live Deployment:** [https://starlitedashboard.onrender.com](https://starlitedashboard.onrender.com)

## 9. Screenshots and Application Preview

The following sections are reserved for application screenshots.

Adding actual screenshots helps developers and recruiters understand the interface without having to navigate the application themselves.

### Student Authentication
![Sign Up Page](images/starlitedashboard.onrender.com.desktop.version.png)
### Student Dashboard

[Insert main dashboard screenshot]

## 10. Engineering Considerations

Some of the important development considerations explored in this project include:

- Managing asynchronous authentication state.
- Building reusable React components.
- Connecting a frontend application to cloud-based services.
- Integrating Firebase Authentication.
- Working with Firebase Realtime Database.
- Managing authenticated user information.
- Implementing authentication-based dashboard access.
- Managing client-side navigation using React Router.
- Preparing and deploying a production React application.

## 11. Potential Future Enhancements

The project provides a foundation that can be extended with additional educational features.

Potential improvements include:

- Student announcements and notifications.
- Academic performance and progress tracking.
- School calendar integration.
- Administrative dashboards.
- Role-based access for students, teachers and administrators.
- Additional communication and collaboration features.

These represent possible future enhancements rather than claims about existing functionality.

## 12. Developer

**Grace Agu**

Frontend Developer | React.js | JavaScript | Tech Educator

I enjoy building practical web applications that combine functional frontend development with real-world problem-solving.

My approach to development emphasises understanding the problem, writing maintainable code and creating user-friendly digital experiences.

**GitHub:** [https://github.com/mygracey](https://github.com/mygracey)

**Live Project:** [https://starlitedashboard.onrender.com](https://starlitedashboard.onrender.com)

---

*Starlite Dashboard — Bringing simplicity and functionality to the student digital experience.*
