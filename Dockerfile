# ── Stage 1: Build ──────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Copy manifests first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build for production
COPY . .
RUN npm run build -- --configuration production

# ── Stage 2: Serve ──────────────────────────────────────────────
FROM nginx:1.27-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app from stage 1
# Update 'my-app' to match your Angular project name in angular.json
COPY --from=builder /app/dist/19curd/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM node:20-alpine
WORKDIR /19CURD
# Install json-server globally
RUN npm install -g json-server
# Copy the database file
COPY expdb.json ./expdb.json
EXPOSE 3000
# Command to run the JSON server and watch the expdb.json file
CMD ["json-server", "--watch", "expdb.json", "--port", "3000", "--host", "0.0.0.0"]