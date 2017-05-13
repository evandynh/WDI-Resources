angular.module('GAPokedex', [])
	.controller('PokemonController', PokemonController)

PokemonController.$inject = ['PokemonFactory']

function PokemonController(PokemonFactory) {
	var self = this
	self.loading = true

	// utilize pokemon factory methods here...
	PokemonFactory.index()
		.success(function(data) {
			self.pokedex = data.pokemon_entries
			self.loading = false
		})

	self.getOnePokemon = function(pokemon){
		self.loading = true
		console.log('Loading initial pokemon info...')

		PokemonFactory.show(pokemon)
			.success(function(data){
				self.selectedPokemon = data
				console.log("Grabbing bio from species url...")
				PokemonFactory.getBio(self.selectedPokemon)
					.success(function(species){
						self.selectedPokemon.bio = species.flavor_text_entries[1].flavor_text

						self.loading = false
					})
			})
	}
}
