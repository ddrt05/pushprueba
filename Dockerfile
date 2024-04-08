ARG NODE_VERSION=18.16.0
ARG ALPINE_VERSION=3.17.2

FROM node:${NODE_VERSION}-alpine AS node

FROM alpine:${ALPINE_VERSION}

RUN mkdir /app 
WORKDIR /app

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "src/index.js" ]

EXPOSE 3000

CMD [ "node", "src/index.js" ]
