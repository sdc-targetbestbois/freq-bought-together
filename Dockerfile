FROM node:12-alpine
WORKDIR /Component_George
COPY . .
RUN npm install
CMD ["node", "/Component_George/server/server.js"]