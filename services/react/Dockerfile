FROM node:18-alpine AS build

WORKDIR /app

COPY src/package*.json ./
RUN yarn

COPY src/ ./

RUN yarn build

FROM httpd:2.4

COPY --from=build /app/dist/src /usr/local/apache2/htdocs/

COPY cfg/my-httpd.conf /usr/local/apache2/conf/httpd.conf
