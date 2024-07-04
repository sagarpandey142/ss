# Use the official GCC image from Docker Hub
FROM gcc:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the C++ source code into the container
COPY main.cpp .

# Compile the C++ source code into an executable
RUN g++ -o myapp main.cpp

# Define the command to run the executable
CMD ["./myapp"]
