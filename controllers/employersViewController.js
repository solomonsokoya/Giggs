function sendEmployers(req, res){
  console.log('I send successfully');
  res.render('employers/index', {
    employers: res.locals.employers
  });
};

function sendOneEmployer(req, res){
  console.log('I send successfully');
  res.render('employers/show', {
    employer: res.locals.employer
  });
};

function sendCreateEmployer(req, res){
  console.log('I send successfully');
  employer = res.locals.newEmployer;
  res.redirect(`/employers/${employer.id}`);
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
  res.redirect('/');
}

module.exports = {
  sendEmployers: sendEmployers,
  sendOneEmployer: sendOneEmployer,
  sendCreateEmployer: sendCreateEmployer,
  editEmployer: editEmployer,
  deleteEmployer: deleteEmployer,
  showEmployersHome: showEmployersHome,
  showRegisterForm: showRegisterForm,
  handleCreatedEmployer: handleCreatedEmployer,
  showLoginForm: showLoginForm
};

