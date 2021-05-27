FROM node:15

WORKDIR /app

COPY ./ ./

COPY .env .

RUN NPM install

CMD ["npm","start"]