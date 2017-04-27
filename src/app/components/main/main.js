(function(angular) {

  angular.module('app').component('viewMain', {
    templateUrl:  'app/components/main/main-template.html',
    controller: ['$state', viewMain],
    controllerAs: 'viewMain'
  });

  function viewMain($state) {
    var vm = this;
 
    vm.goToPlay = function() {
        $state.go('play');
      };

    vm.goToSignup = function() {
        $state.go('signup');
      };
  
  };

})(angular);