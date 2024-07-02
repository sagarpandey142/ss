# Use the official GCC image from Docker Hub
FROM gcc:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the C source file into the container
COPY myapp.c .

# Compile the C source file
RUN gcc -o myapp myapp.c

# Run the compiled C program
CMD ["./myapp"]
