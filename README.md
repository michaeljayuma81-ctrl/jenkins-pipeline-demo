# Jenkins Pipeline Demo

This is a sample project for Jenkins CI/CD pipeline with 3 stages:
1. **Build** - Compile the code
2. **Test** - Run unit tests
3. **Prepare for Deployment** - Package the application

## Prerequisites
- Java 11+
- Maven 3.6+

## Running Locally
\\\ash
mvn clean test
mvn package
\\\

## Jenkins Configuration
Point Jenkins to this repository and select the Jenkinsfile.
