# Tweeter Project

Tweeter is a simple, single-page Twitter clone.  
This project is Built on the [tweeter template](https://github.com/lighthouse-labs/tweeter) by [lighthouse-labs](https://github.com/lighthouse-labs).

## Table of Content

- [Final Product](#final-product)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Features](#features)
- [File Structure](#file-structure)
- [Credit](#credit)

## Final Product

![write-tweet.gif](./docs/write-tweet.gif)  
View the functionalities (with animated GIF) in [Features](#features) section.

&nbsp;

## Dependencies

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [body-parser](https://github.com/expressjs/body-parser)
- [chance](https://chancejs.com/)
- [nodemon](https://github.com/remy/nodemon) (for development)

&nbsp;

## Getting Started

1. Clone this repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. (For developtment) another option to start the web server is using the `npm run local` command. [Nodemon](https://github.com/remy/nodemon) will monitors for any changes in the source code and automatically restart the server.

&nbsp;

## Features

### 1. Submit new tweet with form

![write-tweet.gif](./docs/write-tweet.gif)  
When a user submits a valid tweet, the new tweet is displayed.

&nbsp;

### 2. Display error message

![error_message.gif](./docs/error_message.gif)  
When a user submits an invalid tweet (empty or contains more than 140 characters), an error message is displayed.

&nbsp;

### 3. Responsive Design

![responsive.gif](./docs/responsive.gif)  
The web page has two layouts on different screen sizes (Breakpoint: 1024px).

&nbsp;

## File Structure

### 📂docs

Store animated GIF that are displayed in this README document. These files are not included in the diagram above.

### 📂public

#### 📂images

Contain `profile-hex.png` for the profile picture in page header.

#### 📂scripts

Contain `client.js` and `composer-char-counter`, which are responsible for listening on events and then manipulate the html document.

#### 📂styles

Contains the compiled `CSS` files. 

#### 📜index.html

The `html` file that is rendered by the server.

### 📂server

Contain the `Javascript` and `JSON` file for the server and database.
&nbsp;

### 📜.gitignore

This file is to ignore the `node_modules` folder and `.DS_store` files.

### 📜README.md

This document that you are reading.

### 📜package.json

This file contains:

- the list of dependencies (node libraries that the executable code needs)
- dev-dependencies: node libraries only needed by development tools
- scripts: Define the in-project shortcut commands, therefore using `npm start`, `npm run local`.

