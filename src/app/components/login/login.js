(function(angular) {

  angular.module('app').component('viewLogin', {
    templateUrl:  'app/components/login/login-template.html',
    controller: ['$state', viewLogin],
    controllerAs: 'viewLogin'
  });

  function viewLogin($state) {
    var vm = this;
 
    vm.goToPlay = function() {
        $state.go('play');
      };

    vm.goToSignup = function() {
        $state.go('signup');
      };
  
  };

})(angular);