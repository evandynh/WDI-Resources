var should    = require("chai").should(),
    expect        = require("chai").expect,
    supertest     = require("supertest"),
    api           = supertest("http://localhost:3000")

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/candies-app')

var Candy = require("../models/candy")

describe("GET /candies", function(){
  it("should return a 200 response", function(done){
    api.get("/candies")
    .set("Accept", "application/json")
    .expect(200, done)
  })

  it("should return an array", function(done){
    api.get("/candies")
    .set("Accept", "application/json")
    .end(function(error, response){
      Candy.find(function(err, candies){
        expect(candies).to.be.an('array')
      })
      expect(response.body).to.be.an('array')
      done()
    })
  })

  it("should return all the records in the database", function(done){
    api.get("/candies")
    .set("Accept", "application/json")
    .end(function(error, response){
      Candy.find({}, function(err, candies){
        expect(response.body.length).to.eq(candies.length)
        done()
      })
    })
  })
})

describe("GET /candies/:id", function(){
  var candyId

  before(function(done){
    api.post("/candies")
    .set("Accept", "application/json")
    .send({ "name": "Lollipop", "color": "Red" })
    .end(function(error, response){
      candyId = response.body._id
      done()
    })
  })


  it("should return a 200 response", function(done){
    api.get("/candies/"+candyId)
    .set("Accept", "application/json")
    .end(function(err, response){
      expect(response.status).to.be.eq(200)
      done()
    })
  })

  it("should return an object containing fields name and color", function(done){
    api.get("/candies/"+candyId)
    .set("Accept", "application/json")
    .end(function(error, response){
      expect(response.body.candy).to.have.property("name")
      expect(response.body.candy).to.have.property("color")
      done()
    })
  })
})


describe("POST /candies", function(){
  it("should return a 200 response", function(done){
    api.post("/candies")
    .set("Accept", "application/json")
    .send({ "name": "Lollipop", "color": "Red" })
    .end(function(err, response){
      expect(response.status).to.be.eq(200)
      done()
    })
  })

  it("should add a new candy to the database", function(done){
    Candy.count(function(err, beforeCount){
      api.post("/candies")
      .set("Accept", "application/json")
      .send({ "name": "Lollipop", "color": "Red" })
      .end(function(error, response){
        Candy.count(function(err, afterCount){
          expect(afterCount).to.eq(++beforeCount)
          done()
        })
      })
    })
  })
})

describe("PUT /candies/:id", function(done){
  var candyId

  before(function(done){

    api.get("/candies")
    .set("Accept", "application/json")
    .send({ "name": "Lollipop", "color": "Red" })
    .end(function(error, response){
      candyId = response.body[0]._id
      done()
    })
  })

  it("should return a 200 response", function(){
    api.patch("/candies/"+candyId)
    .set("Accept", "application/json")
    .send({ "name": "Lollipop" })
    .end(function(err, response){
      expect(response.status).to.be.eq(200)
    })
  })


  it("should update a candy document", function(done){
    api.patch("/candies/"+candyId)
    .set("Accept", "application/json")
    .send({ "color": "Green" })
    .end(function(error, response){
      Candy.findById(candyId, function(err, candy){
        expect(candy.color).to.eq("Green")
        done()
      })
    })
  })
})


describe("DELETE /candies/:id", function(done){
  var candyId

  before(function(done){
    candy = Candy.findOne(function(error, candy){
      candyId = candy._id
      done()
    })
    
  })

  it("should remove a candy document", function(done){
    Candy.count(candyId, function(err, beforeCount){
      api.delete("/candies/"+candyId)
      .set("Accept", "application/json")
      .send({ "color": "Green" })
      .end(function(error, response){
        Candy.count(candyId, function(err, afterCount){
          expect(afterCount).to.eq(--beforeCount)
          done()
        })
      })
    })
  })
})