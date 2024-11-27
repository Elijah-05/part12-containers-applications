# Use the official Node.js image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first to leverage caching
# COPY package*.json ./

# Install only production dependencies (if applicable)
# RUN npm ci

# Copy the rest of the application files
COPY . .

RUN npm ci

# Expose the application port
# EXPOSE 3000

# Define the default command to run the app
CMD ["npm", "start"]
