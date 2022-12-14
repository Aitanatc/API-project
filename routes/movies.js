const express = require('express');
const router = express.Router();

const moviesController = require('../controller/movies');

//find and get all
router.get('/', moviesController.getAll);

//find with the id
router.get('/:id', moviesController.getSingle);

//find with genre
router.get('/:genre', moviesController.getSome);

//create a new movie with POST
router.post('/', moviesController.createMovie);

//Edit 
router.put('/:id', moviesController.updateMovie);

//delete a contact
router.delete('/:id', moviesController.deleteMovie);


module.exports = router;