# Étape 1 : Build de l’application Angular
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN node node_modules/esbuild/install.js
RUN npm run build --configuration production

# Étape 2 : Serveur NGINX pour héberger les fichiers
FROM nginx:alpine
COPY --from=build /app/dist/webapp /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
