# FoodSoftware

The iFome Diner Management System was proposed to list functions related to the administration of incoming and outgoing food establishments. Such as product registration, employee registration, sales management, editing of registered products and financial balance visualization. This is an Open Source project made for the subject <b>Projeto e Desenvolvimento de Software</b> at Federal University of Rio Grande do Norte.

<img width="1520" alt="image" src="https://user-images.githubusercontent.com/31252524/158809790-064be103-7124-428a-bdd8-f843ff69d01d.png">


## Consider installing the follow programs in order to run the project properly
<ul>
  <li> Apache </li>
  <li> Node.js </li>
  <li> SQL 5.0 </li>
  <li> MySQL Workbench </li>
</ul>

## Available Scripts to Compile Front-End
In the project directory, you can run:
### `npm start`
Runs the app and compile .pug and .scss archieves.
### `npm run sass`
Runs the app and compile .scss archieves into .css files.
### `npm run pug`
Runs the app and compile .pug archieves into .html files.

## Available Scripts to Compile API for Back-End
In the project directory, you can run:
### `npm run server`
Launches the API to make connections with the database.

## Configuring the Database credentials
The function above in the <b>index.js</b> file provides the DB credentials. This values need to be specific of your development environment.
```
function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'YOUR USER',
    password: 'YOUR PASSWORD',
    port: YOUR PORT,
    database:'DATABASE NAME'
})
```
## Code Status

[![Build Status](https://badge.buildkite.com/ab1152b6a1f6a61d3ea4ec5b3eece8d4c2b830998459c75352.svg?branch=master)](https://aryclenio.github.io)

### Colaborators
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/aryclenio">
        <img src="https://avatars.githubusercontent.com/aryclenio" width="100px;" alt="Aryclenio Xavier"/>
        <br />
        <sub><b>Aryclenio Xavier</b></sub>
      </a><br />
      <a href="https://github.com/aryclenio/Sculptor/commits?author=aryclenio" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="http://github.com/diego2017003">
        <img src="https://avatars.githubusercontent.com/diego2017003" width="100px;" alt="Iago Cassel"/>
        <br />
        <sub><b>Diego Rodrigues</b></sub>
      </a><br />
      <a href="https://github.com/aryclenio/Sculptor/commits?author=diego2017003" title="Code">💻</a>
    </td>
  </tr>
</table>
