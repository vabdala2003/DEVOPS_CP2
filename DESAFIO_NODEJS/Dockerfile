FROM node:lts-alpine3.19
WORKDIR /app-money
COPY package.json .
RUN npm install
COPY . .
USER node
EXPOSE 3000
CMD ["npm", "start"]