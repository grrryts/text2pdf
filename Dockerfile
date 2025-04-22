# Use Node.js LTS (Latest Stable Version)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Set environment variable
ENV BASE_URL=http://95.217.134.12:4010
ENV API_KEY=78684310-850d-427a-8432-4a6487f6dbc4

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]


