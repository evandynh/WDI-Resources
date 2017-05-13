var people = [
  {
    "name"   : "Tom",
    "avatar" : "https://s3.amazonaws.com/uifaces/faces/twitter/craigrcoles/128.jpg",
    "id"     : 0
  },
  {
    "name"   : "Dan",
    "avatar" : "https://s3.amazonaws.com/uifaces/faces/twitter/ivanfilipovbg/128.jpg",
    "id"     : 1
  },
  {
    "name"   : "Ben",
    "avatar" : "https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg",
    "id"     : 2
  },
  {
    "name"   : "Alan",
    "avatar" : "https://s3.amazonaws.com/uifaces/faces/twitter/ryandownie/128.jpg",
    "id"     : 3
  }
]

var Card = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>{this.props.name}</h1>
        <img src={this.props.avatar}/>
      </div>
    )
  }
})

var App = React.createClass({
  getInitialState: function() {
    return {
      people: people
    }
  },

  render: function() {
    return (
      <div className="container">
        {this.state.people.map(function(person) {
          return (
            <Card name={person.name} avatar={person.avatar} key={person.id}/>
          )
        })}
      </div>
    )
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
