var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/airport')

var Passenger = require('./models/passenger'),
    Flight = require('./models/flight'),
    Terminal = require('./models/terminal'),
    Airport = require('./models/airport')

var flight1 = new Flight({
  from: 'CDG France',
  to: 'JFK New York, USA',
  airline: 'American Airlines'
})

flight1.save()
console.log('Flight 1 is', flight1)

var flight2 = new Flight({
  from: 'Heathrow UK',
  to: 'JK New York, USA',
  airline: 'British Airways'
})

flight2.save()
console.log('Flight 2 is', flight2)

var airport1 = new Airport({
  name: 'JFK',
  country: 'USA',
  opened: ((new Date()).setYear(1990))
})

airport1.terminals.push({
  name: 'Terminal 1',
  capacity: 234324,
  flights: [flight1, flight2]
})

// airport1.terminals[0].flights.push(flight1)
// airport1.terminals[0].flights.push(flight2)

airport1.save()
console.log('Airport 1 is', airport1)
console.log("Airport 1's Terminals are", airport1.terminals)
