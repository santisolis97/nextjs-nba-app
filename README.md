# My NBA Games Portfolio App

Welcome to **My NBA Games**, a Next.js v14 application that allows you to explore NBA games, players, and teams. This portfolio app leverages the exciting features introduced in Next.js v14 to provide a modern and seamless experience for NBA enthusiasts to stay updated with the latest information.

## Next.js 14 Features

This project is built using Next.js version 14, taking advantage of the latest features and enhancements. Explore the power of Next.js with improved performance, developer experience, and new capabilities. For detailed information, refer to the [Next.js 14 Release Notes](https://nextjs.org/blog/next-14).

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/santisolis97/nextjs-nba-app.git
```

2. Change into the project directory:

```bash
cd nextjs-nba-app
```

3. Install dependencies:

```bash
npm install
```

4. Create a file named .env.local and fill the blanks

```bash
API_KEY='***********'
API_HOST='***********'
```

5. Run the development server:

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm start`: Starts the production-ready app.
- `npm run lint`: Lints the project files.

## Dependencies

- **@heroicons/react**: SVG icons for UI components.
- **axios**: HTTP client for making API requests.
- **clsx**: Utility for conditionally joining class names together.
- **next**: React framework for server-rendered applications.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Entry point for working with the DOM.
- **react-icons**: Icon library for React.
- **react-loading-skeleton**: Placeholder loading animations for components.
- **react-select**: Dropdown component with advanced features.

## Dev Dependencies

- **@types/node**, **@types/react**, **@types/react-dom**: TypeScript type definitions.
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes.
- **eslint**, **eslint-config-next**: Linting tools for maintaining code quality.
- **postcss**: CSS preprocessor.
- **tailwindcss**: Utility-first CSS framework.
- **typescript**: Typed superset of JavaScript.

## Environment Variables

Ensure you have the following environment variables set in your `.env` file:

- API used in this project: [https://rapidapi.com/theapiguy/api/free-nba](https://rapidapi.com/theapiguy/api/free-nba)
- `API_KEY`: Your API key for accessing NBA data.
- `API_HOST`: The host for the NBA API (default: 'free-nba.p.rapidapi.com').

Feel free to explore, customize, and enhance the app to suit your needs! If you encounter any issues or have suggestions, please let us know by [raising an issue](https://github.com/your-username/my-nba-games/issues). Happy coding!
