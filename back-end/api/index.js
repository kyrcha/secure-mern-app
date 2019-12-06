function route(app, path, file) {
  app.use(path, require(file));
}

module.exports = (app) => {
  route(app, '/api', './public');
  // route(app, '/api/users', './users');
};
