const request = require('superagent');

const makeGet = () => {
  console.log('gets here');
  return request
    .get('http://localhost:3001/api/tours')
    .then(tours => tours);
}

const makePost = (name, activities) => {
  let tour = {};
  tour.name = name;
  tour.activities = activities;
  return request
    .post('http://localhost:3001/api/tours')
    .send(tour)
}

module.exports = {
  makeGet,
  makePost
}