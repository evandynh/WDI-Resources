require_relative 'shelter'
require_relative 'client'
require_relative 'animal'

# 	12 - this will be the main file that we actually execute.
# 		 a) Here, we should use "require_relative" to load the three files we made today.
# 		 b) If you want, you can write some executable code here
# 	
# 	e.g. shelter1 = Shelter.new("The Glue Factory")
# 		 doggy = Animal.new("Donald", "Terrier", 10, "male")
# 		 shelter1.add_animal(doggy)
# 				 
# 		 puts shelter1.animals
	
shelter1 = Shelter.new "Puppy Palace"
kate = Client.new "Kate", 30, "female", 2
mittens = Animal.new "Mittens", "DSH", 3, "male"
mittens.favorite_toys << "ball of string"

shelter1.add_animal mittens
shelter1.add_client kate

puts shelter1.inspect