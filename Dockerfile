# Build stage
# For now, the bun container is INCREDIBLY slow when it comes to installing and building
#FROM oven/bun:alpine AS build
#WORKDIR /app
#COPY package*.json ./
#COPY bun.lock ./
#RUN bun ci --verbose
#COPY . .
#RUN bun run build

# Builder
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginxinc/nginx-unprivileged:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --start-interval=3s \
    CMD ["sh", "-c", "wget -q --spider http://127.0.0.1/ || exit 1"]

EXPOSE 8080