<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mug-hot" class="svg-inline--fa fa-mug-hot fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"></path></svg>

# Compress.o
A URL shortening service for making life easy on internet.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites
- NodeJS
- Node Package Manager(NPM)
- Express
- MongoDB
- EJS
- shortID

# Installation

A step by step series of examples that tell you have to get a development environment running

1. Download ZIP file or clone the repository to create your own copy.
 
 ```
 git clone https://github.com/ggoel1998/compress.o

```
2. Intialize npm 

```
npm init
```

3. Install nodemon for live view of any changes on browser
```
 npm i --save-dev nodemon

```
4. Install express,mongoDB and EJS

```
npm i express mongoose ejs 
```
5. Finally, Installing shortID package
```
npm i shortid
```
6. Setup MongoDB

```javascript
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/url', { 
  useNewUrlParser: true, useUnifiedTopology: true
})
```
7. Start the server.
``` 
npm start
```
And see it working on [http://localhost:5000/](http://localhost:5000/)
