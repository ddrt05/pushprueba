ARG NODE_VERSION=18.16.0
ARG ALPINE_VERSION=3.17.2

FROM node:${NODE_VERSION}-alpine AS node

FROM alpine:${ALPINE_VERSION}

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

RUN mkdir -p /usr/local/app/mode_modules && usr/local/app

WORKDIR /usr/local/app

COPY package*.json ./


RUN node -v

RUN npm install -g yarn --force

RUN yarn -v

COPY . .

EXPOSE 3000

CMD [ "node", "src/index.js" ]
