(function(angular) {

  angular.module('app').component('viewMain', {
    templateUrl:  'app/components/main/main-template.html',
    controller: ['$state', 'playersFactory', viewMain],
    controllerAs: 'viewMain'
  });

  function viewMain($state,  playersFactory) {
    var vm = this;

    vm.$onInit = function() { 

    };
    
    vm.goToSignup = function() {
      $state.go('signup');   
    };
    
    vm.goToLogin = function() {
      $state.go('login');   
    };

  }

})(angular);


