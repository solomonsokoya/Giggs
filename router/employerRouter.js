const employersRouter = require('express').Router();
const employerController = require('../controllers/employersController');
const employerViewController = require('../controllers/employersViewController');
const authController = require('../controllers/authController');

function sendErrors(err, req, res, next){
  console.log('errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  });
};

// employerRouter.route('/')
//   .get(employerViewController.showEmployersHome)
//   // .get(employerController.getAllEmployers, employerViewController.sendEmployers, sendErrors)
//   // .post(employerController.createEmployer, employerViewController.sendCreateEmployer);

// employerRouter.route('/login')
//   .get(employerViewController.showLoginForm)

employersRouter.route('/')
  .get(employerViewController.showEmployersHome);

employersRouter.route('/login')
  .get(employerViewController.showLoginForm)
  .post(authController.login, employerViewController.handleCreatedEmployer);



employersRouter.route('/register')
  .get(employerViewController.showRegisterForm)
  .post(authController.register, employerViewController.handleCreatedEmployer);

module.exports = employersRouter

