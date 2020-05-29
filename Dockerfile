FROM node:latest

# Create app directory
WORKDIR /Component_George

# Install app dependencies
COPY package.json ./
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD npm run dev-server
# CMD [ "npm", "run dev-server" ]