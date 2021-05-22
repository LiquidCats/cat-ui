FROM node:current-alpine

RUN apk add yarn
WORKDIR /var/www/cat-ui
ADD ./ ./

CMD yarn start

