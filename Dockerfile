FROM nginx:1.24.0-alpine-slim
COPY . /usr/share/nginx/html
EXPOSE 80