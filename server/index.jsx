const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const filePath = './data.json';
const fs = require('fs');
const path = require('path');

const moviesData = require(filePath);

app.prepare().then(() => {
 const server = express();
 // server.use(bodyParser.urlencoded({ extended: false }));
 server.use(bodyParser.json());

 server.get(`/api/v1/movies`, (req, res, next) => {
  return res.json(moviesData);
 });

 server.get(`/api/v1/movies/:id`, (req, res, next) => {
  const { id } = req.params;
  const movie = moviesData.find((m) => m.id == id);
  return res.json(movie);
 });

 server.post(`/api/v1/movies`, (req, res, next) => {
  const movie = req.body;
  moviesData.push(movie);

  const pathToFile = path.join(__dirname, filePath);
  const stringifieData = JSON.stringify(moviesData, null, 2);
  fs.writeFile(pathToFile, stringifieData, (err) => {
   if (err) {
    return res.status(402).send(err);
   } else {
    return res.json('Movie has been succesfully added!');
   }
  });
 });

 server.delete(`/api/v1/movies/:id`, (req, res, next) => {
  const { id } = req.params;

  const movieIndex = moviesData.findIndex((m) => m.id == id);
  moviesData.splice(movieIndex, 1);

  const pathToFile = path.join(__dirname, filePath);
  const stringifieData = JSON.stringify(moviesData, null, 2);
  fs.writeFile(pathToFile, stringifieData, (err) => {
   if (err) {
    return res.status(402).send(err);
   } else {
    return res.json('Movie has been succesfully added!');
   }
  });
 });

 server.patch(`/api/v1/movies/:id`, (req, res, next) => {
  const { id } = req.params;
  const movie = req.body;
  const movieIndex = moviesData.findIndex((m) => m.id === id);
  moviesData[movieIndex] = movie;
  const pathToFile = path.join(__dirname, filePath);
  const stringifieData = JSON.stringify(moviesData, null, 2);
  fs.writeFile(pathToFile, stringifieData, (err) => {
   if (err) {
    return res.status(402).send(err);
   } else {
    return res.json(movie);
   }
  });
 });

 server.get('*', (req, res) => {
  return handle(req, res);
 });

 const PORT = process.env.PORT || 3000;

 server.use(handle).listen(PORT, (err) => {
  if (err) throw err;
  console.log('> Ready on port ' + PORT);
 });
});
