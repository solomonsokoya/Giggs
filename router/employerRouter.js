const employersRouter = require('express').Router();
const employerController = require('../controllers/employersController');
const employerViewController = require('../controllers/employersViewController');
const authController = require('../controllers/authController');


employersRouter.route('/login')
  .post(authController.login);

employersRouter.route('/register')
  .post(authController.register);

employersRouter.route('/:id')
  .get(employerController.getOneEmployer, employerController.getEmployersJobs, employerViewController.sendOneEmployer)
  .post(employerController.createJob, employerViewController.sendCreatedJob)
  .delete(employerController.destroyJob)

employersRouter.route('/jobs/:id')
  .get(employerController.getOneJob, employerViewController.showJob)

module.exports = employersRouter
