(function(angular) {

  angular.module('app').component('cardsList', {
    templateUrl:  'app/components/play/cardslist/cards-list-template.html',
    controller: ['$state', 'cardsFactory', cardsList],
    controllerAs: 'cardsList'
  });

  function cardsList($state, cardsFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.allCards = cardsFactory.getAllCards();
    };
  }

})(angular);
