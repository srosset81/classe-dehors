FROM node:12.16-alpine

WORKDIR /app

RUN apk add --update --no-cache git bash yarn nano

RUN npm install -g serve

COPY . /app

RUN npm install

RUN npm run build

CMD serve -s build -l 5000
