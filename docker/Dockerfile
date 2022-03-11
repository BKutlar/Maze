FROM node:alpine AS base

WORKDIR /maze

COPY package.json .
RUN yarn
COPY .babelrc.js .
COPY maps/ ./maps
COPY src/ .
COPY package*.json ./

<<<<<<< HEAD

ENTRYPOINT time yarn start ./maps/rect_01.map
=======
ENTRYPOINT time node ./main.js ./maps/rect_01.map
>>>>>>> e9116df7aee2c599ee09d32a2ef0d4213a40e622
