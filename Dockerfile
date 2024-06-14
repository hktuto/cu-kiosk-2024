FROM electronuserland/builder:wine AS electron-build

RUN mkdir -p /app
WORKDIR /app

COPY ./package.json /app/package.json
RUN yarn install




