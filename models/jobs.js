const db = require('../config/connection');

function getAllJobs(){
  const queryPromise = db.any(`
    SELECT *
    FROM jobs
    `);

  return queryPromise;
};

function getOneJob(id){
  const queryPromise = db.one(`
    SELECT *
    FROM jobs
    WHERE id = $1`, id);

  return queryPromise;
};

function createJob(job){
  const queryPromise = db.one(`
  INSERT INTO jobs
  (description, location, start_date, pay, job_title, job_id)
  VALUES
  ($/description/, $/location/, $/start_date/, $/pay/, $/job_title/, $/job_id/)
  RETURNING *
    `, jobs);

  return queryPromise;
};

function updateJob(job){
  const queryPromise = db.one(`
    UPDATE jobs
    SET description = $/description/, location = $/location/ , start_date = $/start_date/, $job_title/
    RETURNING * `, job);
  return queryPromise;
};

function deleteJob(id){
  const queryPromise = db.one(`
  DELETE FROM jobs
  WHERE id = $1
    `, id);

  return queryPromise;
}

module.exports = {
  deleteJob: deleteJob,
  updateJob: updateJob,
  createJob: createJob,
  getOneJob: getOneJob,
  getAllJobs: getAllJobs
}
