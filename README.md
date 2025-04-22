# Text2PDF

<p align="center">
  <img src="https://pdfguru.com/static/typeword-to-pdf.svg" width="58" height="58" alt="Text to PDF converter icon">
</p>

This is a web application built with Next.js that allows users to convert text into PDF documents. The application leverages modern web technologies and libraries to provide a seamless user experience.

## Project Structure

- **`src/app`**: Contains the main application components, including the layout and global styles.

  - `page.tsx`: The main entry point for the application, rendering the `HomeView`.
  - `layout.tsx`: Defines the root layout, including global providers and metadata.
  - `globals.css`: Global styles for the application.

- **`src/lib`**: Contains utility libraries and state management logic.

  - `store`: Implements Redux store configuration and slices for state management.
  - `providers`: Includes context providers for the application.
  - `constants`: Stores constant values used across the application.
  - `utils`: Utility functions for various purposes.

- **`src/ui`**: Contains UI components and views.
  - `components`: Reusable UI components like `InputGroup`, `Modal`, and `ConvertedHistoryList`.
  - `views`: High-level views like `HomeView` that compose the UI components.

## Main Features

- **Text to PDF Conversion**: Users can input text and convert it into a PDF document.
- **Conversion History**: A list of previously converted PDFs is maintained for quick access.
- **Responsive Design**: The application is designed to be responsive and user-friendly across devices.

## Key Technologies

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **Redux Toolkit**: For state management, providing a centralized store for application state.
- **React-PDF-Viewer**: For rendering PDF documents within the application.

## Getting Started

To run the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

The following scripts are available for development, testing, and maintenance:

- `dev`: Runs the development server with Turbopack - `next dev --turbopack`
- `build`: Builds the application for production - `next build`
- `start`: Starts the production server - `next start`
- `lint`: Runs ESLint to check code quality - `next lint`
- `lint:fix`: Automatically fixes ESLint issues - `next lint --fix`
- `format`: Formats code using Prettier - `prettier --write "**/*.{js,jsx,ts,tsx,json}"`
- `test`: Runs Jest tests - `jest`
- `test:watch`: Runs Jest tests in watch mode - `jest --watch`

## Environment variables

The application uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

- `BASE_URL`: The base URL for the API server
- `API_KEY`: Authentication key for API access
