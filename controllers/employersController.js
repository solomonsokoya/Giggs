const employersDb = require('../models/employers');

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
  destoryEmployer: destoryEmployer
};


