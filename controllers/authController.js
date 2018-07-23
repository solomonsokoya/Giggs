//bycrypt is used to hash the password and also to compare the password
const bcrypt = require('bcrypt');

//import employers databse so we can create a new employer or retrieve data

const employerDb = require('../models/employers');

function register(req, res, next){
  console.log(req.body);
  const salt = parseInt(process.env.SALT);
  const hash = bcrypt.hashSync(req.body.password, salt)
  const user = {

    name: req.body.name,
    logo: req.body.logo,
    email: req.body.email,
    password: hash
  }

  employerDb.createEmployer(user)
    .then( user =>{
      if( !user ){
        throw{
          message: 'not correct'
        }
      }
      res.json({
          user
      })
    })
    .catch( err => {
      next(err);
    })
}

function login (req, res, next){
  let employer;
  const loginAttempt ={
    email: req.body.email,
    password: req.body.password
  };
  employerDb.oneEmployerByEmail(loginAttempt.email)
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
    res.json({
      employer
    })
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
