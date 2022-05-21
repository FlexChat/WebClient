FROM node:14.17.6-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --silent

COPY . ./

# start app
CMD ["npm", "start"]