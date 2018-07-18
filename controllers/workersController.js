const workersDb = require('../models/workers');


//Get One worker

function getOneWorker(req, res, next){
  console.log('I get one worker');
  workersDb.getOneWorker(req.params.id)
    .then( data => {
      res.locals.worker = data;
      next();
    }).catch( err => {
      next(err);
    });
};

//Create One

function createWorker(req, res, next){
  console.log('I create');
  workersDb.createWorker(req.body)
  .then(data => {
    res.locals.newWorker = data;
    next()
  }).catch(err => {
    next(err);
  });
};

function destroyWorker(req, res, next){
  workersDb.deleteWorker(req.params.id)
  .then(() => {
    res.redirect('/workers');
  })
}

function updateWorker(req, res, next){
  console.log('I edit');
  req.body.id = req.params.id;
  workersDb.updateWorker(req.body)
    .then(data => {
      res.redirect(`/workers/${req.body.id}`)
    }).catch(err =>{
      next(err);
    });
};


module.exports = {
  getOneWorker: getOneWorker,
  createWorker: createWorker,
  updateWorker: updateWorker,
  destroyWorker: destroyWorker
};


