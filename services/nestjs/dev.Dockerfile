FROM node:18-alpine

WORKDIR /app

COPY src/package*.json ./
RUN yarn

COPY src/ ./

CMD ["yarn", "start:dev"]