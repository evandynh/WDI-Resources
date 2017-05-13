# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# beans = Bean.create([
#   {name: "Kate's Kona Coffee", roast: "medium", origin: "Kona, Hawaii", quantity: 100},
#   {name: "Mike's Mocha", roast: "light", origin: "California", quantity: 100}
#   ])

teas = Tea.create([
  {name: "English Breakfast", origin: "England", caffeine: true, looseleaf: false, quantity: 45},
  {name: "Green", origin: "Iceland", caffeine: false, looseleaf: true, quantity: 50},
  ])
