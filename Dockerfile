FROM node:16

WORKDIR /app

RUN npm install

COPY package*.json ./

COPY . .

EXPOSE 3000

CMD [ "npm", "start", "migrate-db" ]
