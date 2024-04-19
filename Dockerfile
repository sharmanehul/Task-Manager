FROM node:lts-alpine
WORKDIR /index
COPY package*.json ./
COPY client/package*.json client/
RUN npm run install -client --only=production
RUN npm run install -server --only=production
RUN npm run build --prefix client
COPY server/package*.json server/
CMD["npm","start","prefix","client"]
EXPOSE 8000
