FROM node:10.16.3

EXPOSE 8080

# The actual app
WORKDIR /usr/local/app
COPY . /usr/local/app

RUN npm install

CMD ["npm", "run", "dev"]
