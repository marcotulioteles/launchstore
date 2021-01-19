<!-- <h1 align="center">
    <img alt="Launchstore" title="#Launchstore" src="./assets/banner.png" />
</h1> -->

<h1 align="center">
  <a href="#"> LAUNCHSTORE </a>
</h1>

<h3 align="center">
    Your best marketplace where you can buy and sell whatever you want!
</h3>

<!-- <p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/tgmarinho/README-ecoleta?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tgmarinho/README-ecoleta">

  <a href="https://www.twitter.com/tgmarinho/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Ftgmarinho%2FREADME-ecoleta">
  </a>
  
  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tgmarinho/README-ecoleta">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/tgmarinho/README-ecoleta/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/tgmarinho/README-ecoleta?style=social">
  </a>

  <a href="https://rocketseat.com.br">
    <img alt="made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
  
  <a href="https://blog.rocketseat.com.br/">
    <img alt="Stargazers" src="https://img.shields.io/badge/Blog-Rocketseat-%237159c1?style=flat&logo=ghost">
    </a> 
</p> -->

<h4 align="center"> 
	 Status: Building...
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#screenshots">Screen Shots</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>

</p>

## About

Launchstore - is a web marketplace where you can offer products to sell or buy it from other users.
Project developed during ** Bootcamp - LaunchBase ** offered by [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/). LaunchBase is an online bootcamp with lots of practical content, challenges and hacks teached to new developers who wants to improve in their careers or reinforce their knowledge about web software development.

---

## Features

- [x] Users (buyers or sellers) can register on the web platform by sending:
   - [x] name
   - [x] email
   - [x] CPF or CNPJ
   - [x] address 

- [x] Users can announce their products to sell it

- [x] Users can buy any product available

- [x] Users can update their products ads anytime

- [x] The application do the management of all data information about the products (images, description details, storage, etc)

### Screenshots

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="home" title="home" src="./assets/home.gif" width="800px">
  <!-- <img alt="pizza" title="#pizza" src="./assets/pizza_announcement.png" width="400px">
  <img alt="register" title="#register" src="./assets/register.png" width="400px">
  <img alt="registerForm" title="#registerForm" src="./assets/register_form.png" width="400px"> -->
</p>

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/download/)
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the Backend (server)

```bash

# Clone this repository
$ git clone https://github.com/marcotulioteles/launchstore.git

# Access the project folder cmd/terminal
$ cd launchstore

# install the dependencies
$ npm install

# Run the application
$ npm start

# The server will start at port: 3000 - go to http://localhost:3000

```

#### Building the Database

Copy the content from the file database.sql and run the queries in the Database PostgreSQL, block by bloco to create all tables that the application will use.
> See the file  [database.sql](https://github.com/marcotulioteles/launchstore/blob/master/database.sql)

Inside the folder "config" there is a file called "db.js". Replace the user and password as your database user settings.
> See the file  [db.js](https://github.com/marcotulioteles/launchstore/blob/master/src/config/db.js)

## Tech Stack

The following tools were used in the construction of the project:

#### **Website**

-   **[HTML](https://developer.mozilla.org/fr/docs/Web/Guide/HTML/HTML5)**
-   **[CSS](https://www.w3schools.com/css/)**
-   **[Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript)**

> See the file  [package.json](https://github.com/marcotulioteles/launchstore/blob/master/package.json)

#### ([NodeJS])(https://nodejs.org/en/)

-   **[Express](https://expressjs.com/)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[Bcryptjs](https://www.npmjs.com/package/bcrypt)**
-   **[MethodOverride](https://www.npmjs.com/package/method-override)**
-   **[Nunjucks](https://www.npmjs.com/package/nunjucks)**
-   **[Nodemailer](https://nodemailer.com/about/)**

#### ([PostgreSQL])(https://www.postgresql.org/download/)

> See the file  [package.json](https://github.com/marcotulioteles/launchstore/blob/master/package.json)

## Author
<p><b>Marco Tulio Teles</b></p>

[Linkedin](https://www.linkedin.com/in/marco-tulio-teles-30019672/) 
[E-mail](mailto:marcotuliocivileng@gmail.com)

---

## License

This project is under the license [MIT](./LICENSE).

Made with love by Marco Tulio Teles 👋🏽 [Get in Touch!](https://www.linkedin.com/in/marco-tulio-teles-30019672/)

---