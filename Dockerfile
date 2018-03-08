# base image
FROM node:9.5

COPY package.json /app/package.json
WORKDIR /app
RUN npm install --silent


COPY ./public /app/public
COPY ./src /app/src


# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# start app
CMD ["npm", "start"]
