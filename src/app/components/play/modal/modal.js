(function(angular) {

  angular.module('app').component('replayModal', {
    templateUrl:  'app/components/play/modal/modal-template.html',
    controller: [ '$ngAnimate, $state, $window' ,  replayModal],
    controllerAs: 'replayModal'
  });

  function replayModal($ngAnimate, $window, $state) {
    var vm = this;
 
    vm.$onInit = function() {
    
        vm.modalShown = false;
        vm.toggleModal = function() {
            vm.modalShown = !vm.modalShown;
        };
      
        // vm.playerUsername = playersFactory.newPlayer.username
      
        vm.goToPlay = function() {
            $state.go('play'); 
        }

        vm.goToShare = function() {
            $window.alert('Esto investigaré cómo se hace');
        };
      
    };
  }

})(angular);