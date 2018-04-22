//bycrypt is used to hash the password and also to compare the password
const bcrypt = require('bcrypt');

//import workers databse so we can create a new worker or retrieve data

const workersDb = require('../models/workers');

function register(req, res, next){
  const salt = parseInt(process.env.SALT);
  const hash = bcrypt.hashSync(req.body.password, salt)
  const user = {

    name: req.body.name,
    skills: req.body.skills,
    location: req.body.location,
    picture: req.body.picture,
    email: req.body.email,
    password: hash
  }

  workersDb.createWorker(user)
    .then( user =>{
      if( !user ){
        throw{
          message: 'not correct'
        }
      }
      req.session.user = user;
      next();
    })
    .catch( err => {
      next(err);
    })
}

function login (req, res, next){
  let worker;
  const loginAttempt ={
    email: req.body.email,
    password: req.body.password
  };
  workersDb.getOneWorkerByEmail(loginAttempt.email)
  .then(data =>{
    user = data
    return bcrypt.compareSync(loginAttempt.password, data.password);
  })
  .then( validPass => {
    if(!validPass){

      throw{
        message: "invalid password"
      }
    }
    req.session.worker = worker;
    next();
  })
  .catch( err =>{
    next(err);

    })

};

function logout(req, res, next) {
  req.session.destroy(err => next(err));
   }


module.exports = {
  register: register,
  login: login,
  logout: logout
};
