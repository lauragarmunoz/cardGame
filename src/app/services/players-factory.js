(function(angular) {

  /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
  angular.module('app').factory('playersFactory', playersFactory);

  function playersFactory() {
    var module = {};
    var self = module;

      module.allPlayers = [
        {"id": 0, "username": "Garfield", "password": "hola", "avatar": "cats.jpg"},
        {"id": 1, "username": "Garfield", "password": "hola", "avatar": "cats.jpg"},
        {"id": 2, "username": "Garfield", "password": "hola", "avatar": "cats.jpg"},
      ]; 

      module.newPlayer = false;

      module.signupPlayer = function(newPlayer) {
        self.newPlayer = newPlayer;
      };

    return module;
  };

})(angular);


