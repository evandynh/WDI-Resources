var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3000')

describe('GET /candies', function() {
  it('should return a 200 response', function(done) {
    api.get('/candies')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
  it('should return an array', function(done) {
    api.get('/candies')
      .set('Accept', 'application/json')
      .end(function(error, response) {
        expect(response.body).to.be.an('array')
        done()
      })
  })
  it('should return an object that has a field called name', function(done) {
    api.get('/candies')
      .set('Accept', 'application/json')
      .end(function(error, response) {
        expect(response.body[0]).to.have.property('name')
        done()
      })
  })
})

describe('POST /candies', function() {
  before(function(done) {
    api.post('/candies')
      .set('Accept', 'application/json')
      .send({
        id: 5,
        name: 'Lollipop',
        color: 'Red'
      }).end(done)
  })
  it('should add a candy object to the collection candies and return it', function(done) {
    api.get('/candies')
      .set('Accept', 'application/json')
      .end(function(error, response) {
        expect(response.body.length).to.equal(5)
        done()
      })
  })
})

describe('GET /candies/:id', function() {
  it('should return an object with a field called "name" and a field called "color"', function(done) {
    api.get('/candies/1')
      .set('Accept', 'application/json')
      .end(function(error, response) {
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('color')
        done()
      })
  })
})

describe('PUT /candies/:id', function() {
  it('should update a candy object', function(done) {
    api.put('/candies/5')
      .set('Accept', 'application/json')
      .send({
        id: 5,
        name: 'Popsicle',
        color: 'Pink'
      })
      .end(function(error, response) {
        expect(response.body.id).to.eq(5)
        expect(response.body.name).to.eq('Popsicle')
        expect(response.body.color).to.eq('Pink')
        done()
      })
  })
})

describe('DELETE /candies/:id', function() {
  it('should delete a candy with a specific id', function(done) {
    api.delete('/candies/5')
      .set('Accept', 'application/json')
      .end(function(error, response) {
        expect(response.body.message).to.eq('deleted')
        done()
      })
  })
})

// dynamic deletion of last candy in array
// describe('DELETE /candies/:id', function() {
//   var last = 0
//   before(function(done) {
//     api.get('/candies')
//       .set('Accept', 'application/json')
//       .end(function(error, response) {
//         last = response.body.length
//         done()
//       })
//   })
//   it('should delete a candy with a specific id', function(done) {
//     api.delete('/candies/' + last)
//       .set('Accept', 'application/json')
//       .end(function(error, response) {
//         expect(response.body.message).to.eq('deleted')
//         done()
//       })
//   })
//   it('should have one fewer candy in the collection', function(done) {
//     api.get('/candies')
//       .set('Accept', 'application/json')
//       .end(function(error, response) {
//         expect(response.body.length).to.eq(last - 1)
//         done()
//       })
//   })
// })
