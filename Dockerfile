FROM nginx:alpine

COPY dist/apps/website/browser/ /usr/share/nginx/html
