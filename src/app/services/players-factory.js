(function(angular) {

  /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
  angular.module('app').factory('playersFactory', playersFactory);

  function playersFactory() {
    var module = {};
    var self = module;

    module.allPlayers = [
      {"id": 0, "name": "Garfield", "surname": "Martinez", "avatar": "cats.jpg"},
      {"id": 1, "name": "Pepe", "surname": "Gonzalez", "avatar":"camaleones.jpg"},
      {"id": 2, "name": "Manolo","surname": "Perez", "avatar": "dogs.jpg"},
    ]; 

/*    module.getAllAnimals = function() {
      return self.allAnimals;
      
      } */
    

  /* Al principio allAnimals es false 
   module.allAnimals = false; */

   
   /* module.getAllAnimals = function() {
     // Si ya tenemos allAnimals, si no es false, devolvemos una promesa con esos datos; en caso contrario, los cargamos x ajax y luego los devolvemos

     // Declaramos la promesa 
      var defered = $q.defer();
      var promise = defered.promise;

      //  Si ya tenemos los animales, los devolvemos 
      if ( self.allAnimals ) {
        defered.resolve(self.allAnimals);
      } else {
       // Si no, los cargamos con get y devolvemos el data del response
        $http.get('http://localhost:8080/app/mocks/animals.json').then(function(response) {
          // Seteamos allAnimals para que la próxima vez no sea necesaria la llamada aja
          self.allAnimals = response.data;
          defered.resolve(response.data);
        });
      }

      // Devolvemos la promesa
      return promise;
  }; */

/*    module.getAnimalById = function(_id_) {
      var len = self.allAnimals.length;
      var id = parseInt(_id_);

      if ( !id ) {
        return false;
      }

      while ( len-- ) {
        if ( self.allAnimals[len].id === id ) {
          return self.allAnimals[len];
        }
      }
    };*/

    module.addPlayer = function(newPlayer) {
      newPayer.id = self.allPlayers.length;
      self.allPlayer.push(newplayer);
    };

  /*  module.updateAnimal = function(_id_, animatToEdit) {
      var len = self.allAnimals.length;
      var id = parseInt(_id_);

      if ( !animatToEdit ) {
        return;
      }

      while ( len-- ) {
        if ( self.allAnimals[len].id === id ) {
          self.allAnimals[len].name = animatToEdit.name;
          self.allAnimals[len].img  = animatToEdit.img;
          self.allAnimals[len].type = animatToEdit.type;
        }
      }  

    };
*/
    return module;
  };

})(angular);


