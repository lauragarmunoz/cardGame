(function(angular) {

  angular.module('app').component('viewSignup', {
    templateUrl:  'app/components/signup/signup-template.html',
    controller: ['$state', 'playersFactory', viewSignup],
    controllerAs: 'viewSignup'
  });

  function viewSignup($state,  playersFactory) {
    var vm = this;

    vm.$onInit = function() { 
/*      vm.showMsg = false;
      vm.formIsSend = false;    */ 
    };

    vm.signupPlayer = function() {
       var newPlayer = {
         username: vm.playerUsername, 
         password: vm.playerPassword,
         avatar: vm.playerAvatar
        };


      playersFactory.signupPlayer(newPlayer);
      $state.go('play');   
    };

  }

})(angular);


