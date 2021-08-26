# graphics-cards
Graphics card catalog app


This project was generated with Angular 12, database is Mongodb, api Rest generated with Express framework. Tested with Cypress, linted with Eslint and dockerized.
- api folder contains api Rest port 3000. 
- front folder, angular project, port 4400.


## Development server

First run `npm run dev` for listen to api server (first `run npm install` to load dependencies). Then enter front directory `cd front` and execute `ng serve`
Navigate to `http://localhost:4400/`. The app will automatically reload if you change any of the source files.

## Container - Docker

Run `docker-compose up --build -d` for load it in a docker container, it will render on port 4400.

##  End to end Test
Run `npm run open`to load cypress, docker container must be loaded to check tests.

## Lint

Run `ng lint` to linting the project

## This project is still updating, the information will be expanded as it progresses. Stay in contact! ❤️
