FROM node:10-alpine

RUN apk --no-cache add --virtual native-deps \
    g++ gcc libgcc libstdc++ linux-headers make \
    python autoconf automake bash zlib-dev libpng-dev \
    build-base libtool jq openssh libtool nasm \
    libjpeg-turbo-dev

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm i npm@latest -g
RUN npm install

RUN rm -rf /var/cache/apk/*

EXPOSE 3000
CMD [ "npm", "start" ]