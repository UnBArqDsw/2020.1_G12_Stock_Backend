FROM node:12.2.0-alpine


WORKDIR /app

COPY ./ ./

RUN yarn install

COPY ./ ./

CMD ["yarn", "start"]