# React Image Gallery Application

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-10.4.0-yellow)
![Vite](https://img.shields.io/badge/Vite-4.4.5-green)

This is a web application built with React that allows users to view and interact with a gallery of images. Users can log in, reorder images by dragging and dropping, search for images by tags, and log out. Firebase is used for authentication.

This is a project built during my internship with HNG at Stage 3.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Demo

You can view a live demo of the application [here](https://teal-belekoy-3f4d34.netlify.app/).

## Features

- User authentication with Firebase.
- Drag-and-drop functionality for reordering images.
- Search for images by tags.
- User-friendly interface.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   `git clone https://github.com/TheKillerRex27/react-image-gallery`

2. Navigate to the project directory:

   `cd react-image-gallery`

3. Install the dependencies:

   `npm install`

4. Create a Firebase project and configure it according to your needs. Update the Firebase configuration in the `firebaseConfig.js` file.

5. Start the development server:

   `npm run dev`

6. Open your browser and access the application at [http://localhost:5173](http://localhost:5173).

## Usage

1. Log in to the application with the default details:
    - Username: user@example.com
    - Password: 1Password
2. Explore the gallery of images.
3. Use drag-and-drop to reorder images.
4. Search for images by entering tags in the search bar.
5. Log out when you're done.

## Technologies Used

- React
- Firebase (Authentication)
- Vite (Build tool)
- @dnd-kit/core and @dnd-kit/sortable (Drag-and-drop functionality)
- React Router (Routing)
- Bootstrap (Styling)

## License

This project is licensed under the [MIT License](LICENSE).