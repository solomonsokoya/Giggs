const db = require('../config/connection');

function allEmployers(){

  const queryPromise = db.any(`
  SELECT *
  FROM employers
    `);

  return queryPromise;

};

function oneEmployer(id){
  const queryPromise = db.one(`
    SELECT *
    FROM employers
    WHERE id = $1`, id);

  return queryPromise;
};

function oneEmployerByEmail(email){
  const queryPromise = db.one(`
    SELECT *
    FROM employers
    WHERE email = $1`, email);

  return queryPromise;
};


function createEmployer(employer){
  const queryPromise = db.one(`
  INSERT INTO employers
  (name, logo, email, password)
  VALUES
  ($/name/, $/logo/, $/email/, $/password/)
  RETURNING *
    `,employer);

  return queryPromise;
}

function updateEmployer(employer){
  const queryPromise = db.one(`
  UPDATE employers
  SET name = $/name/, logo = $/logo/, email = $/email/
  RETURNING* `, employer)

  return queryPromise;
}


function deleteEmployer(id){
  const queryPromise = db.none(`
  DELETE FROM employers
  WHERE id = $1
    `, id);

  return queryPromise;
}

module.exports = {
  deleteEmployer: deleteEmployer,
  updateEmployer: updateEmployer,
  createEmployer: createEmployer,
  oneEmployer: oneEmployer,
  allEmployers: allEmployers,
  oneEmployerByEmail, oneEmployerByEmail
};
