# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Vampire.destroy_all

vampires = Vampire.create([
		{name: "Angelus", age: 256, sire: "Darla", staked: false},
		{name: "Darla", age: 312, sire: "unknown", staked: false},
		{name: "Drusilla", age: 197, sire: "Angelus", staked: false},
		{name: "Spike", age: 215, sire: "Drusilla", staked: false}
	])