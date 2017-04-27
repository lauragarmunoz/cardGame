(function(angular) {

  angular.module('app').component('footerCard', {
    templateUrl:  'app/components/commons/footer/footer-template.html',
    controller: ['$state', footerCard],
    controllerAs: 'footerCard'
  });

  function footerCard($state) {
    var vm = this;

    vm.goToAbout = function() {
      $state.go('about');
    };
  }

})(angular);