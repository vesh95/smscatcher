FROM node:14-alpine

WORKDIR /app

ADD ./package.json /app/
ADD ./package-lock.json /app/

RUN [ "npm", "install" ]

ADD ./src /app/src

CMD npm run start