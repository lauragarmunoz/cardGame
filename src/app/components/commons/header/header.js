(function(angular) {

  angular.module('app').component('headerCard', {
    templateUrl:  'app/components/commons/header/header-template.html',
    controller: ['$state', headerCard],
    controllerAs: 'headerCard'
  });

  function headerCard($state) {
    var vm = this;

    vm.goToMain = function() {
      $state.go('main');
    };
  }

})(angular);