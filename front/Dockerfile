FROM node:14-alpine as builder
WORKDIR /src/usr/web
COPY *.json ./

RUN npm install

COPY . .

EXPOSE 4200
RUN npm i @angular/cli --no-progress --loglevel=error
RUN npm i --only=production --no-progress --loglevel=error
RUN npm run build --prod


FROM nginx:1.13.3-alpine
COPY default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /src/usr/web/dist/front /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
