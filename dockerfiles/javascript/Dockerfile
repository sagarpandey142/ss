# Use the official Node.js image from Docker Hub
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Node.js application files into the container
COPY package*.json ./
COPY app.js .

# Install dependencies
RUN npm install

# Run the Node.js application
CMD ["node", "app.js"]
