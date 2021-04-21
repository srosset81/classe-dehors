FROM node:12.16-alpine

WORKDIR /app

RUN apk add --update --no-cache git bash yarn nano

RUN yarn global add serve

COPY . /app

RUN yarn install

RUN yarn run build

CMD serve -s build -l 4000
