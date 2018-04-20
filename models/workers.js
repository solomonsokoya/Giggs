const db = require('../config/connection');

function getOneWorker(id){
  const queryPromise = db.one(`
    SELECT *
    FROM workers
    WHERE id = $1
    `, id);

return queryPromise;
};

function createWorker( worker){
   const queryPromise = db.one(`
    INSERT INTO workers
    (name, skills, location, picture, email, password)
    VALUES
    ($/name/ , $/skills/, $/location/, $/picture/, $/email/, $/password/)
    RETURNING *`, worker);

  return queryPromise;
};

function deleteWorker(id){
  const queryPromise = db.one(`
  DELETE FROM workers
  WHERE id = $1
  `, id);

  return queryPromise;
};

function updateWorker(worker){
  const queryPromise = db.one(`
    UPDATE workers
    SET name = $/name/ , skills = $/skills/, location = $/location/, picture = $/picture/, email = $/email/
    `, worker);

  return queryPromise;
};

module.exports = {
  updateWorker: updateWorker,
  deleteWorker: deleteWorker,
  createWorker: createWorker,
  getOneWorker: getOneWorker
};
