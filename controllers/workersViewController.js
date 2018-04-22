function sendWorkers(req, res){
  console.log('I send successfully');
  res.render('workers/index', {
    workers: res.locals.workers
  });
};

function sendOneWorker(req, res){
   console.log('I send successfully');
   console.log(res.locals.worker);
   console.log(res.locals.jobs);
  res.render('workers/index', {
    worker: res.locals.worker,
    jobs: res.locals.jobs
  });
};

function sendCreatedWorker(req, res){
  console.log('I send successfully');
  worker = res.locals.newWorker;
  res.redirect(`/workers/${worker.id}`);
};

function editWorker(req, res){
  console.log('I send successfully');
  res.render('workers/index', {
    worker: res.locals.worker
  });
};

function deleteWorker(req, res){
  res.redirect('workers/index');
};

function showWorkersHome(req, res){
  res.render('workers/home');
};
function showLoginForm(req, res){
  res.render('workers/loginForm');
};

function showRegisterForm(req, res){
  res.render('workers/registerForm')
};

function handleCreatedWorker(req, res){
   const worker = req.session.user;
  res.redirect(`${worker.id}`);
}

module.exports = {
  sendWorkers: sendWorkers,
  sendOneWorker: sendOneWorker,
  sendCreatedWorker: sendCreatedWorker,
  editWorker: editWorker,
  deleteWorker: deleteWorker,
  showWorkersHome: showWorkersHome,
  showRegisterForm: showRegisterForm,
  handleCreatedWorker: handleCreatedWorker,
  showLoginForm: showLoginForm
};

