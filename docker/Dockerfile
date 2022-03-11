FROM node:alpine AS base

WORKDIR /maze
COPY package.json ./
RUN yarn
COPY maps/ ./maps
COPY src/ .

ENTRYPOINT time yarn babel-node ./main.js ./maps/rect_01.map
