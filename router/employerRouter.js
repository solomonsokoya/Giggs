const employerRouter = require('express').Router();
const employerController = require('../controllers/employersController');
const employerViewController = require('../controllers/employersViewController');

function sendErrors(err, req, res, next){
  console.log('errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  });
};

employerRouter.route('/')
  .get(employerController.getAllEmployers, employerViewController.sendEmployers, sendErrors)
  .post(employerController.createEmployer, employerViewController.sendCreateEmployer);


module.exports = employerRouter

