(function(angular) {

  angular.module('app').component('viewPlay', {
    templateUrl:  'app/components/play/play-template.html',
    controller: ['$state', '$window', viewPlay],
    controllerAs: 'viewPlay'
  });

  function viewPlay($state, $window, ) {
    var vm = this;

       
        vm.toggleModal = function() {
            vm.modalShown = !vm.modalShown;
            console.log ('click modal');
        };
            
        vm.goToPlay = function() {
            $state.go('play'); 
        }

        vm.goToShare = function() {
            $window.alert('Esto investigaré cómo se hace');
        };


    };

})(angular);