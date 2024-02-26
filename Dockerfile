FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5173

VOLUME ./:/app

CMD ["yarn", "dev"]
