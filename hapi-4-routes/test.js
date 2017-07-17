const Lab = require('lab');
const lab = exports.lab = Lab.script();
const request = require('request');

lab.experiment('math', () => {

  lab.test('get root from localhost:3000', (done) => {
    request('http://localhost:3000', function (error, response, body) {
      Lab.expect(body).to.equal('Hello Future Studio!');
      done();
    });
  });

  lab.test('get root from localhost:3000', (done) => {
    request.post('http://localhost:3000', function (error, response, body) {
      Lab.expect(body).to.equal('Created a new instance.');
      done();
    });
  });

  lab.test('get root from localhost:3000', (done) => {
    request.put('http://localhost:3000', function (error, response, body) {
      Lab.expect(body).to.equal('Created a new instance.');
      done();
    });
  });

  lab.test('get root from localhost:3000', (done) => {
    request.get('http://localhost:3000/page/3', function (error, response, body) {
      Lab.expect(body).to.equal('You got page 3');
      done();
    });
  });

});
