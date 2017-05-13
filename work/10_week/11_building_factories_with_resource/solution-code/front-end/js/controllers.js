angular
  .module("lightsaberApp")
  .controller("MainController", MainController);

MainController.$inject = ['Character', 'Episode']
function MainController(Character, Episode){
  var self = this;

  // Blank new character for form
  self.character = {}

  // Fetch all characters
  self.characters = Character.query();

  // Fetch all episodes
  self.episodes = Episode.query()

  // Fetch the clicked character
  self.selectCharacter = function(character) {
    self.selectedCharacter = Character.get({id: character._id});
  };

  // Create/Update a Character (Class Method)
  self.addCharacter = function() {
    if (self.character._id) {
      Character.update(self.character, function(){
        self.character = {};
      });
    } else {
      Character.save(self.character, function(character) {
        self.characters.push(character);
        self.character = {}
      });
    }
  };

  // Delete a Character
  self.deleteCharacter = function(character){
    Character.delete({id: character._id});
    var index = self.characters.indexOf(character);
    self.characters.splice(index, 1);
  }

  // Fill the form to edit a Character
  self.editCharacter = function(character){
    self.character = character;
  }
}
