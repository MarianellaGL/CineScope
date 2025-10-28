# Docker Setup for CineScope

This guide explains how to run CineScope using Docker.

## Prerequisites

- Docker installed on your machine
- Docker Compose (optional, but recommended)
- Google Cloud API key for Google Maps

## Environment Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Google Cloud API key:
   ```env
   VITE_BASE_GOOGLE_CLOUD_KEY=your_actual_api_key_here
   VITE_BASE_URL=https://overpass-api.de/api/interpreter
   ```

## Running with Docker Compose (Recommended)

The easiest way to run the application is using Docker Compose, which reads environment variables from your `.env` file automatically.

```bash
# Build and start the container
docker-compose up --build

# Run in detached mode (background)
docker-compose up -d --build

# Stop the container
docker-compose down
```

Access the application at `http://localhost:3000`

## Running with Docker CLI

If you prefer using Docker directly:

```bash
# Build the image
docker build \
  --build-arg VITE_BASE_GOOGLE_CLOUD_KEY=your_api_key_here \
  --build-arg VITE_BASE_URL=https://overpass-api.de/api/interpreter \
  -t cinescope .

# Run the container
docker run -p 3000:80 --name cinescope-app cinescope

# Run in detached mode
docker run -d -p 3000:80 --name cinescope-app cinescope

# Stop the container
docker stop cinescope-app

# Remove the container
docker rm cinescope-app
```

## Using Environment Variables from Shell

You can also pass environment variables from your current shell session:

```bash
# Export variables
export VITE_BASE_GOOGLE_CLOUD_KEY=your_api_key_here
export VITE_BASE_URL=https://overpass-api.de/api/interpreter

# Build with Docker Compose
docker-compose up --build
```

## Architecture

The Docker setup uses a multi-stage build:

1. **Builder Stage**: Uses Node.js 20 Alpine to build the React application
   - Installs dependencies
   - Builds the production bundle with Vite
   - Environment variables are injected at build time

2. **Production Stage**: Uses Nginx Alpine to serve the static files
   - Copies built assets from builder stage
   - Configured for SPA routing
   - Includes gzip compression and caching

## Port Mapping

- Container exposes port 80 (Nginx)
- Mapped to host port 3000
- Access via `http://localhost:3000`

## Troubleshooting

### Build fails with missing environment variables
Make sure you've set `VITE_BASE_GOOGLE_CLOUD_KEY` in your `.env` file or passed it as a build argument.

### Changes not reflected after rebuild
Docker may use cached layers. Force a clean build:
```bash
docker-compose build --no-cache
```

### Port 3000 already in use
Change the port mapping in `docker-compose.yml`:
```yaml
ports:
  - "8080:80"  # Use port 8080 instead
```

## Security Notes

- The `.env` file is excluded from Docker builds via `.dockerignore`
- Never commit `.env` with actual API keys to version control
- Environment variables are baked into the build at compile time
- For production deployments, use proper secrets management
