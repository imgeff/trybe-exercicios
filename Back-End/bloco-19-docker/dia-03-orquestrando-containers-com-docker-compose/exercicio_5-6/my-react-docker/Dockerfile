FROM node:16
WORKDIR /usr/react
COPY package.json /usr/react/
RUN npm install
COPY /src /usr/react/
COPY /public/ /usr/react/
EXPOSE 8080:80
CMD npm start