FROM node:alpine

WORKDIR /

COPY package.json /

RUN npm install --silent
RUN npm install react-scripts

COPY . .
EXPOSE 3000

CMD ["npm", "start"]
