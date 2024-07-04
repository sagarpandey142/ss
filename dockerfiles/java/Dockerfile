# Use the official OpenJDK image from Docker Hub
FROM openjdk:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Java source file into the container
COPY Main.java .

# Compile the Java source file
RUN javac Main.java

# Run the compiled Java class
CMD ["java", "Main"]
