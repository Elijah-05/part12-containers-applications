FROM node:20 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Testing stage
FROM builder AS tester

RUN npm test

# Build the application
FROM tester AS production

ARG VITE_BACKEND_URL

ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

RUN npm run build

FROM nginx:alpine

COPY --from=production /usr/src/app/dist /usr/share/nginx/html
