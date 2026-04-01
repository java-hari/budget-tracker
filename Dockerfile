# Stage 1: Build the Angular application
FROM node:20-alpine AS development
WORKDIR /19CURD
COPY package*.json ./
RUN npm install
# Ensure you adjust the 'dist' path based on your 'angular.json' outputPath
RUN npm install -g @angular/cli
COPY . .

# Stage 2: Serve the application with Nginx
#FROM node:lts-slim AS development
# Copy the built application from the build stage to the Nginx html folder
# Check your exact output path by running 'ng build' locally if needed
#COPY  . .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM node:20-alpine
WORKDIR /19CURD
# Install json-server globally
RUN npm install -g json-server
# Copy the database file
COPY expdb.json ./expdb.json
EXPOSE 3000
# Command to run the JSON server and watch the expdb.json file
CMD ["json-server", "--watch", "expdb.json", "--port", "3000", "--host", "0.0.0.0"]