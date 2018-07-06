# base image
FROM node:10.5.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies

COPY package.json /usr/src/app/package.json
RUN npm install --silent

COPY public /usr/src/app/public
COPY src /usr/src/app/src

# start app
CMD ["npm", "start"]