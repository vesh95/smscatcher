FROM node:14-alpine

COPY . /app

WORKDIR /app

RUN [ "npm", "install" ]

EXPOSE 80 6001

CMD npm run start