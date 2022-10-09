const mongodb = require('../database/connection');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('Movies').collection('Movies').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('Movies')
    .collection('Movies')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};
const getSome = async (req, res, next) => {
  const genre = new ObjectId(req.params.genre);
  const result = await mongodb
    .getDb()
    .db('Movies')
    .collection('Movies')
    .find({genre: genre});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createMovie = async (req, res) => {
  const movie = {
    genre: req.body.genre,
    title: req.body.title,
    year: req.body.year,
    director: req.body.director,
    review: req.body.review,
  };
  const response = await mongodb.getDb().db('Movies').collection('Movies').insertOne(movie);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || "Sorry, something happened. Try again");
  }
};
const updateMovie = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const movie = {
    review : req.body.review
  };
  const response = await mongodb
    .getDb()
    .db('Movies')
    .collection('Movies')
    .replaceOne({ _id: userId }, movie);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Sorry, an error occurred.');
  }
};
const deleteMovie = async  (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
  .getDb()
  .db("Movies")
  .collection("Movies")
  .remove({_id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "An error ocurred.")
  }
};


module.exports = {
  getAll,
  getSingle,
  getSome,
  createMovie,
  updateMovie,
  deleteMovie
};

