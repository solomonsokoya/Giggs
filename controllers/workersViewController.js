function sendWorkers(req, res){
  console.log('I send successfully');
  res.render('workers/index', {
    workers: res.locals.workers
  });
};

function sendOneWorker(req, res){
   console.log('I send successfully');
  res.json({
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

function showRegisterForm(req, res){
  res.render('workers/registerForm')
};

function handleCreatedWorker(req, res){
  res.json({
      user: req.session.user
  })
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
