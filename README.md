# Rosiviel : Google Adwords API data viewer

Get an amazing view from your Google Adwords account with gorgeous charts <3

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node.js : https://nodejs.org/en/download/package-manager/

Yarn : https://yarnpkg.com/lang/en/
or NPM : https://www.npmjs.com/


### Installing locally

Installing :

`yarn`

Run the front :

`yarn start `


Run the back with no reload on save :

`yarn start:server2 `


## Configs

create `.js` file from `.js.dist` files

### Back

database (server/database/config.js.dist) : `mongodb://rosiviel:27112017_Oclock@ds111876.mlab.com:11876/rosiviel`

JWT (server/jWT/config.js.dist): `1E987utc236s57er4D62EB5Hj81Wvkq81g3zy`

### Front

JWT (app/src/config/index.js.dist): `r8K23Jwn114Jf2Z33r8SD4v7S89tt2`

Ajax Basepath (app/src/config/index.js.dist):

Dev:`http://localhost:3000/`

Prod : `/`


## Log-in

### real data
user: rosiviel

password: rosiviel

### fake data

user: demo

password: demo

## Running the tests

Use this command line to launch chaï tests:

`yarn test `

### Running app in browser

Go to http://localhost:3333/ to run the front

Go to http://localhost:3000/ to run the back


## Build in production

Front:

`yarn build`

Back :

`yarn build:server`
