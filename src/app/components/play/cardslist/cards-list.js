(function(angular) {

  angular.module('app').component('cardsList', {
    templateUrl:  'app/components/play/cardslist/cards-list-template.html',
    controller: ['$state', 'cardsFactory', cardsList],
    controllerAs: 'cardsList'
  });

  /* Inyectamos aquí y arriba $state */
  function cardsList($state, cardsFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.allCards = cardsFactory.getAllCards();
     
    /* cardsFactory.getAllCards().then(function(data) {
        vm.allCards = data;
     });  
      vm.currentPosition = 'up';*/
    };

    /* Al clicar sobre un elemento de la lista,
    nos vamos al detalle con el método go de $state */
/*    vm.goToDetail = function(_idAnimal_) {
      $state.go('detail', {idAnimal: _idAnimal_});
    };*/

/*    vm.sortList = function(_position_) {
      if ( _position_ !== vm.currentPosition ) {
        vm.allCards.reverse();
        vm.currentPosition = _position_;
      }
    };*/

  }

})(angular);
