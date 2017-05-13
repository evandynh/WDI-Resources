(function() {
  'use strict'

  angular.module('hintApp')
    .controller('HintsController', HintsController)

    function HintsController() {
      var self = this

      // seed data from the mind of Tilda
      self.allHints = [
        {
          id: 0,
          wisdom: "Not blinking isn't an option, but an advantage.",
          incorporated: false
        },
        {
          id: 1,
          wisdom: "You should only prctice throat singing in the evening, when the sunlight is amber.",
          incorporated: false
        },
        {
          id: 2,
          wisdom: "The eclipse can give much power.",
          incorporated: false
        },
        {
          id: 3,
          wisdom: "Walk until no matter encroaches upon you. Shed your clothes and lay here. You are lonely/complete.",
          incorporated: false
        }
      ]

      self.newHint = {
        wisdom: ''
      }
      self.addHint = addHint
      self.ids = 4

      function addHint() {
        self.allHints.push({
          id: self.ids,
          wisdom: self.newHint.wisdom,
          incorporated: false
        })
        self.ids++
        self.newHint.wisdom = ''
      }

      self.remove = remove

      function remove(removeHint) {
        self.allHints = self.allHints.filter(function(hint) {
          return hint.id != removeHint.id
        })
      }

      self.changeIncorporated = changeIncorporated

      function changeIncorporated(hint) {
        hint.incorporated = !hint.incorporated
      }

      self.numberToIncorporate = numberToIncorporate

      function numberToIncorporate() {
        return self.allHints.filter(function(hint) {
          return !hint.incorporated
        }).length
      }

    }
}())
