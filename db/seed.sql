\c gigs_db

DROP TABLE IF EXISTS employers CASCADE;
DROP TABLE IF EXISTS workers CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;

CREATE TABLE employers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  logo TEXT,
  email VARCHAR(255),
  password VARCHAR(255)
);
CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  description TEXT,
  location VARCHAR(255),
  start_date DATE,
  pay INT,
  job_title VARCHAR(255),
  job_id INT REFERENCES employers (id)
);
CREATE TABLE workers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  skills VARCHAR(255),
  location VARCHAR(255),
  picture VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

INSERT INTO employers
(name, logo, email, password)
VALUES
('Gatorode', 'http://payload.cargocollective.com/1/3/125554/2124491/Gatorade_Logo_900_01%20by%20Bory_900.jpg', 'Brand Ambassador', '1234abcd');


INSERT INTO jobs
(description, location, start_date, pay, job_title, job_id)
VALUES
('Will be handing out our new protien bars in various gyms across Manhattan' ,'Manhattan,NY', '20170601', 13, 'Brand Ambassador', 1);

INSERT INTO workers
(name, skills, location, picture, email, password)
VALUES
('Solo', 'Web developer', 'staten island', 'http://www.trbimg.com/img-5a6bbfa3/turbine/ct-dwyane-wade-cavaliers-personal-matter-20180126', 'solomonsokoya@aol.com', '4321dcba');



