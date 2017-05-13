angular.module('GAPokedex')
  .factory('PokemonFactory', PokemonFactory)

PokemonFactory.$inject = ['$http']

function PokemonFactory($http){
  var apiUrl = 'http://pokeapi.co/api/v2/'

  return {
    index: index,
    show: show,
    getBio: getBio
  }

  // Gets all pokemon from the api
  function index() {
    return $http.get(apiUrl + 'pokedex/1')
  }

  // Gets a single pokemon from the API
  function show(pokemon) {
    return $http.get(apiUrl + 'pokemon/' + pokemon.entry_number)
  }

  // Get a single pokemon's bio
  function getBio(pokemon) {
    return $http.get(pokemon.species.url)
  }
}
