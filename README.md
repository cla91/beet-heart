# BeetHeart - Vegetarian Recipes Website

Welcome to the BeetHeart project! This is a single-page application designed to help users easily discover and explore a variety of delicious vegetarian recipes. The website is built with a focus on simplicity, responsiveness, and an excellent user experience.

## Table of contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Features](#features)
  - [Technologies used](#technologies-used)
  - [Future improvements](#future-improvements)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Project structure](#project-structure)
- [Credits](#credits)

## Overview

### Requirements

Here's what the website should include:

- A search bar that allows you to find all vegetarian recipes.
- Each recipe search must display at least a title and cover image.
- Clicking on a recipe will take you to a dedicated page, where further information will be displayed.
- A simple and easy-to-use UI and UX.
- An organized and understandable app structure.
- Responsive design.

### Screenshot

## My process

### Features

- Intuitive Search & URL Persistence: A dynamic search bar allows users to quickly find recipes. Search queries are managed directly in the URL, which allows users to easily bookmark, share, and return to specific search results without losing their place. The application also remembers your last query, providing a seamless experience upon returning to the recipe list.
- Interactive List: Browse through a grid of recipes, each displaying its title, a cover image and basic information (ready time and number of servings).
- Dedicated Recipe Pages: Click on any recipe to navigate to a dedicated page with more detailed information, including ingredients and instructions. The page automatically scrolls to the top for a smooth user experience.
- Dynamic Page Titles: Page titles are dynamically updated to reflect the content, such as "Search for 'pasta'" or the name of a specific recipe. This enhances the user experience for bookmarking, improves accessibility for screen readers, and is beneficial for search engine optimization (SEO).
- Robust Error Handling: The application includes a dedicated ErrorPage that provides clear feedback to the user when a route or API call fails.
- Organized UI/UX: The interface is clean, easy to navigate, and structured with a consistent layout using a reusable Header and Footer component.
- Responsive Design: The application is fully responsive and provides a seamless experience on all devices, from desktop computers to mobile phones.

### Technologies used

This project was built using a modern and robust stack to ensure a fast, scalable, and maintainable application.

**Frontend**

- React: The core JavaScript library for building the user interface.
- React Hooks: Utilized for managing state and side effects in functional components. Specific hooks like useLocation are used to enhance the user experience, for example by scrolling to the top of the page on route changes.
- React Router: Handles client-side routing, enabling a smooth, multi-page experience with nested routes and a consistent layout. It also provides robust error handling with the useRouteError hook.
- Context API: Manages global state, specifically the LastQueryContext, which persists the user's last search query across the application.
- TanStack Query: A powerful library used for data fetching, caching, and state synchronization, significantly improving performance. Custom hooks (e.g. useSearchRecipes) are implemented to manage data fetching, with staleTime and gcTime set to Infinity to ensure cached data is not refetched unnecessarily.
- Motion.dev: A simple and powerful animation library for React, used to create fluid and engaging UI transitions (e.g. in the search results).

**Backend & API Handling**

- Axios: A promise-based HTTP client used for making efficient API requests both on the frontend and within the serverless function.
- Serverless Functions: The project utilizes a serverless function hosted on Netlify to securely handle API calls to the Spoonacular API. This architectural choice is a crucial security measure, as it prevents the exposure of the API key in the client-side code. The frontend communicates with this function, which in turn performs the request to the external API, ensuring the key remains hidden. The function code itself is part of the GitHub repository, but the sensitive API key is stored securely as an environment variable within Netlify's settings, never exposing it to the public.

### Future Improvements

- Implement a filtering system by ingredients or cuisine type.
- Add user authentication to allow users to save favorite recipes.
- Include a rating and review system for recipes.
- Expand the recipe database with more diverse vegetarian options.

## Getting Started

To get a local copy up and running, follow these simple steps.
You will need Node.js and npm installed on your machine.

### Installation

    Clone the repository:

```
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
```

    Navigate to the project directory:

```
    cd your-repository-name
```

    Install the dependencies:

```
    npm install
```

    Start the development server:

```
    npm start
```

### Project structure

The project follows a component-based architecture for better organization and reusability.

```
/src
├── components/ # Reusable UI components (e.g., Layout, Header, Footer)
├── pages/ # Top-level components for each route (e.g., HomePage, RecipesPage)
├── context/ # Context API for global state management
├── hooks/ # Custom React Hooks (e.g., useSearchRecipes)
├── utils/ # Utility functions, like API fetching logic
├── styles/ # Global styles, resets, variables, mixin
├── App.jsx # Main application component with nested routing
├── routes.jsx # Centralized route configuration
├── App.jsx # Main application component with nested routing
└── routes.jsx # Centralized route configuration

/netlify
└── functions/ # Serverless functions
```

## Credits

This project was built by Claudia Cantiani.
Special thanks to: SVG Plants and Leaves by [SCGBackground](https://www.svgbackgrounds.com/) for the beautiful design elements.
