const employersDb = require('../models/employers');
const jobsDb = require('../models/jobs');

//Get Employers

function getAllEmployers(req, res, next){
  console.log('I getting all employers');
  employersDb.allEmployers()
    .then( data =>{
      res.locals.employers = data;
      next();
    }).catch( err =>{
    next(err);
    })
};

//Get One Employer

function getOneEmployer(req, res, next){
  console.log('I get one employer');
  employersDb.oneEmployer(req.params.id)
    .then( data => {
      res.locals.employer = data;
      next();
    }).catch( err => {
      next(err);
    });
};

//Get all jobs of the employer

function getEmployersJobs(req, res, next){
  console.log('I get all jobs')
  jobsDb.getMatch(req.params.id)
  .then( data =>{
    res.locals.jobs = data;
    next();
  }).catch( err =>{
    next(err);
  });
};

function getAllJobs(req, res, next){
  jobsDb.getAllJobs()
  .then( data =>{
    res.locals.jobs = data;
    next();
  }).catch(err =>{
    next(err);
  });
};

//Get One Job

function getOneJob(req, res, next){
  jobsDb.getOneJob(req.params.id)
  .then(data =>{
    res.locals.job = data;
    next();
  }).catch(err => {
    next(err);
  });
};

//Create a Job posting

function createJob(req, res, next){
  console.log('I create jobs');
  jobsDb.createJob(req.body)
  .then( data =>{
    res.locals.newJob = data;
    next();
  }).catch( err => {
    next(err);
  });
};

//Delete Job Posting

function destroyJob(req, res, next){
  jobsDb.deleteJob(req.params.id)
  .then(() =>{
    res.json({
      status: 'ok'
    })
  }).catch(err =>{
    next(err);
  });
};

//Create One

function createEmployer(req, res, next){
  console.log('I create');
  employersDb.createEmployer(req.body)
  .then(data => {
    res.locals.newEmployer = data;
    next()
  }).catch(err => {
    next(err);
  });
};

function destoryEmployer(req, res, next){
  employersDb.deleteEmployer(req.params.id)
  .then(() => {
    res.redirect('/employers');
  })
}

function updateEmployers(req, res, next){
  console.log('I edit');
  req.body.id = req.params.id;
  employersDb.updateEmployer(req.body)
    .then(data => {
      res.redirect(`/employers/${req.body.id}`)
    }).catch(err =>{
      next(err);
    });
};



module.exports = {
  getAllEmployers: getAllEmployers,
  getOneEmployer: getOneEmployer,
  createEmployer: createEmployer,
  updateEmployers: updateEmployers,
  destoryEmployer: destoryEmployer,
  getEmployersJobs: getEmployersJobs,
  createJob: createJob,
  getAllJobs: getAllJobs,
  destroyJob: destroyJob,
  getOneJob: getOneJob
};
