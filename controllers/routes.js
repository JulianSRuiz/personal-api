const mainCtrl = require('./mainCtrl.js');

module.exports = (app) => {
  app.get("/api/users", mainCtrl.getUsers);
  app.get("/api/users/name", mainCtrl.getName);
  app.get('/api/users/occupation', mainCtrl.getOccupation);
  app.get('/api/users/location', mainCtrl.getLocation);
  app.get('/api/users/occupation/latest', mainCtrl.getCurrentJob);
  app.get('/api/users/hobbies', mainCtrl.getHobbies);
  app.get('/api/users/hobbies/:type', mainCtrl.getTypeOfHobby);
  app.post('/api/users/name', mainCtrl.postName);
}
