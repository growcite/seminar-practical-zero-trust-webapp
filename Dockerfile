FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json files
COPY package*.json ./
RUN npm ci

# Copy only the build output from the previous stage
COPY src/ ./src

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
