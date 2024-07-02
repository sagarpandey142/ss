#!/bin/bash

# Define a function to display usage instructions
usage() {
  echo "Usage: $0 [build|up|down|logs]"
  exit 1
}

# Check if at least one argument is provided
if [ $# -eq 0 ]; then
  usage
fi

# Command to handle different options
case $1 in
  build)
    echo "Building Docker images..."
    docker-compose build
    ;;
  up)
    echo "Starting Docker containers..."
    docker-compose up -d
    ;;
  down)
    echo "Stopping and removing Docker containers..."
    docker-compose down
    ;;
  logs)
    echo "Displaying logs for Docker containers..."
    docker-compose logs -f
    ;;
  *)
    usage
    ;;
esac
