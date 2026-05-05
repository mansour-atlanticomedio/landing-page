FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN ls -l /app

FROM httpd:2.4-alpine

RUN sed -i \
    -e 's/^#LoadModule rewrite_module/LoadModule rewrite_module/' \
    -e '/<Directory "\/usr\/local\/apache2\/htdocs">/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' \
    conf/httpd.conf
    
RUN rm -rf /usr/local/apache2/htdocs/*

COPY --from=build-stage /app/dist/. /usr/local/apache2/htdocs/

EXPOSE 80



