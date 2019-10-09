const App = require('./cli-app');
const api = require('./cli-api');
const request = require('superagent');

const app = new App(api);

const northAmericanTour = {
  title: 'North American Tour',
  activities: ['music', 'food', 'beer'],
  stops: []
};

const postTour = function(tour) {
  return request
    .post('http://localhost:3001/api/tours')
    .send(tour)
    .then(({ body }) => body);
}


postTour(northAmericanTour)
  .then(() => {
    app.start();
  })