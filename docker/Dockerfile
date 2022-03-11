FROM node:alpine AS base

WORKDIR /maze
COPY maps/ ./maps
COPY src/ .

ENTRYPOINT time node ./main.ts ./maps/rect_01.map
