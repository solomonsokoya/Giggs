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


employersRouter.route('/')
  .get(employerViewController.showEmployersHome);

employersRouter.route('/login')
  .get(employerViewController.showLoginForm)
  .post(authController.login, employerViewController.handleCreatedEmployer);


employersRouter.route('/register')
  .get(employerViewController.showRegisterForm)
  .post(authController.register, employerViewController.handleCreatedEmployer);

employersRouter.route('/:id')
  .get(employerController.getOneEmployer, employerController.getEmployersJobs, employerViewController.sendOneEmployer)
  .post(employerController.createJob, employerViewController.sendCreatedJob)

module.exports = employersRouter

