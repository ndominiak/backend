FROM node

WORKDIR /usr/app

COPY yarn.lock ./

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]