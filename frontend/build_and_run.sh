#!/bin/sh

# Build the Docker image
docker build -t react-tailwind-app .

# Run the Docker container
docker run --rm -p 8080:80 react-tailwind-app
