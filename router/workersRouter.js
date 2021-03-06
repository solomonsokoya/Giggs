const workersRouter = require('express').Router();
const workersController = require('../controllers/workersController');
const employerController = require('../controllers/employersController');
const workersViewController = require('../controllers/workersViewController');
const authController = require('../controllers/authController2');

function sendErrors(err, req, res, next){
  console.log('errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  });
};


workersRouter.route('/login')
  .post(authController.login, workersViewController.handleCreatedWorker);

workersRouter.route('/register')
  .post(authController.register, workersViewController.handleCreatedWorker);

workersRouter.route('/:id')
  .get(workersController.getOneWorker, employerController.getAllJobs, workersViewController.sendOneWorker);

module.exports = workersRouter
