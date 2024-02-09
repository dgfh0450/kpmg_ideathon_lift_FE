FROM node:14

COPY . /client
WORKDIR /client
COPY package.json .
RUN npm install

EXPOSE 3030

CMD ["npm", "start"]