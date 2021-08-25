FROM node:10-alpine
WORKDIR /src/usr/app
COPY . .
RUN npm ci
COPY . .
CMD ["npm","run","dev"]