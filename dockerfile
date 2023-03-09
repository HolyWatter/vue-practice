FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

RUN npm run build

CMD ["serve -s dist"]

