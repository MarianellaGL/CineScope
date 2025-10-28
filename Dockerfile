FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Accept build arguments for Vite environment variables
ARG VITE_BASE_GOOGLE_CLOUD_KEY
ARG VITE_BASE_URL=https://overpass-api.de/api/interpreter

# Set environment variables for Vite build
ENV VITE_BASE_GOOGLE_CLOUD_KEY=$VITE_BASE_GOOGLE_CLOUD_KEY
ENV VITE_BASE_URL=$VITE_BASE_URL

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
