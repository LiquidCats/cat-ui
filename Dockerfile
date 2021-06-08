FROM node:current-alpine

WORKDIR /var/www/cat-ui

ADD ./ ./

RUN apk add yarn
RUN yarn

CMD yarn start

