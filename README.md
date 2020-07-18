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