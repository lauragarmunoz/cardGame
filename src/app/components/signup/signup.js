(function(angular) {

  angular.module('app').component('viewSignup', {
    templateUrl:  'app/components/signup/signup-template.html',
    controller: ['$state', viewSignup],
    controllerAs: 'viewSignup'
  });

  function viewSignup($state) {
    var vm = this;
  

    vm.$onInit = function() { 
/*      vm.showMsg = false;
      vm.formIsSend = false;   */  
    };

   vm.goToPlay = function() {
      $state.go('play');
    };

    vm.addPlayer = function() {
       var newPlayer = {
         username: vm.playerUsername, 
         password: vm.playerPassword,
         avatar: vm.playerAvatar
        };

/*        vm.formIsSend = true;    

        if ( !newAnimal.name || !newAnimal.img || !newAnimal.type ) {
          vm.showMsg = true;
        } else {
           vm.showMsg = false;
        }

      if ( !vm.showMsg ) {
        animalsFactory.addAnimal(newAnimal);
      }*/
    };
  };
})(angular);


