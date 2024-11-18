# Muncheese - Cheesy Cravings, Satisfied Fast!

Welcome to Muncheese, your go-to destination for cheesy delights! From our gooey cheese-loaded burgers and melty quesadillas to crispy fries and indulgent cheesy dips, every bite is a cheesy adventure waiting to happen.

## Live Demo

Check out the live demo of our project [here](https://muncheese.vercel.app/).

## Features

- Browse a variety of cheesy dishes
- Add items to your cart
- View detailed descriptions and nutritional information
- Smooth scrolling and navigation
- Responsive design for mobile and desktop

## Tech Stack

### Frontend

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Radix UI**: A set of accessible, unstyled components for building high-quality web applications.
- **Emotion**: A library for writing CSS styles with JavaScript.

### Backend

- **Firebase**: A platform developed by Google for creating mobile and web applications.
  - **Firebase Admin SDK**: Used for server-side operations with Firebase.
  - **Firestore**: A NoSQL document database built for automatic scaling, high performance, and ease of application development.

### Tools & Libraries

- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Prettier**: An opinionated code formatter.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.
- **Autoprefixer**: A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/SpaceTesla/muncheese.git
```

2. Navigate to the project directory:

```sh
cd muncheese
```

3 Install dependencies:

```sh
npm install
```

4. Set up environment variables:

Create a .env file in the root directory and add the following variables:

```env
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_PRIVATE_KEY=your-firebase-private-key
FIREBASE_CLIENT_EMAIL=your-firebase-client-email
```

## Usage

To start the development server, run:

```sh
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

To build the project for production, run:

```sh
npm run build
```

To start the production server, run:

```sh
npm start
```

## API Endpoints

### Get Categories

- URL: `/api/category`
- Method: `GET`
- Response: Returns a list of categories

### Get Items

- URL: `/api/items`
- Method: `GET`
- Response: Returns a list of items grouped by category.
