(function(angular) {

  angular.module('app').component('playingCards', {
    templateUrl:  'app/components/play/playingCards/playing-cards-template.html',
    controller: playingCards,
    controllerAs: 'playingCards',
    bindings: {
      itemCard: '<'
    }
  });

  function playingCards() {
    var vm = this;
  }

})(angular);