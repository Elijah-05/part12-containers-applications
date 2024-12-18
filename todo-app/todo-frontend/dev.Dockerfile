FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# Change npm ci to npm install since we are going to be in development mode

COPY . .

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]