# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the TypeScript source code to the container
COPY ./project ./app

# Build the TypeScript project
# RUN npm run build

# Expose the port that your application listens on
EXPOSE 8000

# Start your application when the container starts
CMD [ "npm", "run", "start" ]
# CMD [ "tail", "-f", "/dev/null" ]
