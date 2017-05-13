(function() {
  'use strict';

  angular.module('app')
  .factory('clientData', function() {

    var service = {};

    service.clients = [
      {
        "name": "Urielle Ortiz",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Pede ac urna. Ut tincidunt vehicula",
        "funds": 9372
      },
      {
        "name": "Quemby Hopkins",
        "city": "Rio Grande",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Ante. Nunc mauris sapien, cursus",
        "funds": 4394
      },
      {
        "name": "Cassady Evans",
        "city": "Kester",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Magnis dis parturient",
        "funds": 7797
      },
      {
        "name": "Lana Head",
        "city": "Ciplet",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Dolor quam, elementum at, egestas a,",
        "funds": 8806
      },
      {
        "name": "Lila Blackburn",
        "city": "Kester",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Du turpis. Nulla",
        "funds": 3206
      },
      {
        "name": "Yuri Stein",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus.",
        "funds": 9755
      },
      {
        "name": "Lacota Warren",
        "city": "Rio Grande",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Ultrices posuere cubilia Curae; Phasellus ornare. Fusce",
        "funds": 4048
      },
      {
        "name": "Mari Klein",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Egestas. Fusce aliquet magna a neque.",
        "funds": 5422
      },
      {
        "name": "Kitra Oneil",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Proin nisl sem,",
        "funds": 4190
      },
      {
        "name": "Judith Rivers",
        "city": "Kester",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Dolor quam, elementum at, egestas",
        "funds": 5776
      },
      {
        "name": "Bo Carlson",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Tristique pellentesque, tellus sem mollis dui, in",
        "funds": 5381
      },
      {
        "name": "Allegra Mcdaniel",
        "city": "Rio Grande",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Proin velit. Sed malesuada augue ut",
        "funds": 7871
      },
      {
        "name": "Vielka Hoffman",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Egestas a, scelerisque sed, sapien. Nunc pulvinar",
        "funds": 3970
      },
      {
        "name": "Larissa Powell",
        "city": "Kester",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Class aptent",
        "funds": 685
      },
      {
        "name": "Uma Matthews",
        "city": "Rio Grande",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Nunc pulvinar",
        "funds": 5194
      },
      {
        "name": "Nevada Landry",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Donec dignissim magna a tortor.",
        "funds": 5887
      },
      {
        "name": "Cherokee Hansen",
        "city": "Norfolk",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Lacus pede sagittis",
        "funds": 2986
      },
      {
        "name": "Hilary Colon",
        "city": "Ciplet",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Augue ac ipsum. Phasellus vitae mauris",
        "funds": 1067
      },
      {
        "name": "Yael Whitaker",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Cras dolor dolor",
        "funds": 1154
      },
      {
        "name": "Chiquita Cobb",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Dolor. Fusce feugiat. Lorem ipsum dolor sit",
        "funds": 815
      },
      {
        "name": "Elaine Elliott",
        "city": "San Pablo",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia",
        "funds": 9902
      },
      {
        "name": "Risa Gomez",
        "city": "Norfolk",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Aliquam rutrum lorem",
        "funds": 9716
      },
      {
        "name": "Meghan Cleveland",
        "city": "San Pablo",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Sit amet ultricies",
        "funds": 903
      },
      {
        "name": "Scarlet Bauer",
        "city": "Norfolk",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Dui. Cras pellentesque.",
        "funds": 8598
      },
      {
        "name": "Stella Bean",
        "city": "Rio Grande",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Sodales elit erat vitae risus. Duis",
        "funds": 2201
      },
      {
        "name": "Charde Palmer",
        "city": "Kester",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Morbi tristique senectus et netus et malesuada",
        "funds": 5112
      },
      {
        "name": "Michelle Frank",
        "city": "Norfolk",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Fermentum risus, at fringilla purus mauris a nunc. In",
        "funds": 4331
      },
      {
        "name": "Karyn Walsh",
        "city": "Ciplet",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Adipiscing lacus. Ut nec urna",
        "funds": 1281
      },
      {
        "name": "Briar Oneal",
        "city": "San Pablo",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Senectus et netus et",
        "funds": 9635
      },
      {
        "name": "Selma Chambers",
        "city": "San Pablo",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Sit amet ultricies sem magna nec quam. Curabitur vel",
        "funds": 5068
      },
      {
        "name": "Heidi Williamson",
        "city": "Kester",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Gravida sit amet, dapibus id, blandit at,",
        "funds": 5821
      },
      {
        "name": "Pandora Anthony",
        "city": "San Pablo",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Tincidunt. Donec vitae erat vel pede blandit congue.",
        "funds": 7864
      },
      {
        "name": "McKenzie Vang",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Morbi tristique senectus et netus et malesuada fames ac turpis",
        "funds": 9266
      },
      {
        "name": "Harriet Andrews",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Libero at auctor ullamcorper, nisl",
        "funds": 2166
      },
      {
        "name": "Madonna Davis",
        "city": "Norfolk",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Quis diam luctus lobortis. Class aptent taciti sociosqu ad",
        "funds": 9550
      },
      {
        "name": "Phyllis Sandoval",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Nisl sem,",
        "funds": 7011
      },
      {
        "name": "Jamalia Golden",
        "city": "Kester",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Nunc ut erat.",
        "funds": 2618
      },
      {
        "name": "Lacy Blackwell",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Placerat eget, venenatis a, magna. Lorem ipsum dolor",
        "funds": 1849
      },
      {
        "name": "Alisa Mcleod",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Rhoncus. Proin",
        "funds": 1513
      },
      {
        "name": "Aline Wilkinson",
        "city": "San Pablo",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Non enim commodo hendrerit. Donec",
        "funds": 3618
      },
      {
        "name": "Casey Dudley",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
        "funds": 9688
      },
      {
        "name": "Indira Donovan",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem,",
        "funds": 4170
      },
      {
        "name": "Deirdre Russo",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Egestas. Aliquam nec enim. Nunc ut erat. Sed nunc",
        "funds": 9404
      },
      {
        "name": "Grace Bailey",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Velit in aliquet lobortis.",
        "funds": 2109
      },
      {
        "name": "Kylie Berg",
        "city": "Kester",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Taciti sociosqu ad orci.",
        "funds": 8224
      },
      {
        "name": "Molly Travis",
        "city": "Darion",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet",
        "funds": 3549
      },
      {
        "name": "Nina Mccullough",
        "city": "Bonn",
        "date": new Date(new Date() - 86400000 * Math.floor(Math.random() * 700)),
        "bio": "Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh",
        "funds": 4975
      }
    ];

    service.cities = getUnique(service.clients, 'city');

    return service;

    function getUnique(arr, field) {
      var obj = {};
      arr.forEach(function(e){
        obj[e[field]] = true;
      });
      return Object.keys(obj).sort();
    };

  });

})();
