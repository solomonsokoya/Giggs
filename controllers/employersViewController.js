function sendEmployers(req, res){
  console.log('I send successfully');
  res.render('employers/index', {
    employers: res.locals.employers
  });
};

function sendOneEmployer(req, res){
  console.log('I send successfully');
  res.render('employers/index', {
    employer: res.locals.employer,
    jobs: res.locals.jobs
  });
};

function sendCreatedJob(req, res){
  res.redirect('back');
};

function editEmployer(req, res){
  console.log('I send successfully');
  res.render('employers/index', {
    employer: res.locals.employer
  });
};

function deleteEmployer(req, res){
  res.redirect('employers/index');
};

function showEmployersHome(req, res){
  res.render('employers/home');
};
function showLoginForm(req, res){
  res.render('employers/loginForm');
};

function showRegisterForm(req, res){
  res.render('employers/registerForm')
};

function handleCreatedEmployer(req, res){
  const employer = req.session.user;
  res.redirect(`${employer.id}`);
}

function showJob(req, res){
  res.render('employer/new', {
    job: res.locals.job
  });
}
module.exports = {
  sendEmployers: sendEmployers,
  sendOneEmployer: sendOneEmployer,
  sendCreatedJob: sendCreatedJob,
  editEmployer: editEmployer,
  deleteEmployer: deleteEmployer,
  showEmployersHome: showEmployersHome,
  showRegisterForm: showRegisterForm,
  handleCreatedEmployer: handleCreatedEmployer,
  showLoginForm: showLoginForm,
  showJob: showJob
};

