const express = require('express');
const app = express();

/**
 * @module API
 * */

/**
 * Ruta principal
 * @name Index
 * @path {GET} /
 * */
app.get('/', (req, res) => res.send('Hola'));

/**
 * Ruta para obtener usuarios
 * @name Users
 * @path {POST} /users
 * */
app.post('/users', (req, res) => res.send('Users'));

/**
 * Ruta para actualizar productos
 * @name Products
 * @path {PUT} /products
 * */
app.put('/products', (req, res) => res.send('Products'));

/**
 * Ruta para eliminar categoria
 * @name Categories
 * @path {DELETE} /categories
 * */
app.delete('/categories', (req, res) => res.send('Categories'));