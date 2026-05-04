FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM httpd:2.4-alpine

COPY --from=build-stage /app/dist /usr/local/apache2/htdocs/

EXPOSE 80