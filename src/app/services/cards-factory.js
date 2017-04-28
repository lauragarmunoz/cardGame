(function(angular) {

  /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
  angular.module('app').factory('cardsFactory', cardsFactory);

  function cardsFactory() {
    var module = {};
    var self = module;

    module.allCards = [
      {"id": 0, "image": "alice.jpg"},
      {"id": 1, "image": "conejo.jpg"},
      {"id": 2, "image": "twins.jpg"},
      {"id": 3, "image": "sombrerero.jpg"},
      {"id": 4, "image": "gusano.jpg"},
      {"id": 5, "image": "reina.jpg"}

    ]; 

    module.getAllCards = function() {
      return self.allCards;
      
      };

    return module;
  };

})(angular);