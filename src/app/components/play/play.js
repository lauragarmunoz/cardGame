(function(angular) {

  angular.module('app').component('viewPlay', {
    templateUrl:  'app/components/play/play-template.html',
    controller: ['$state', viewPlay],
    controllerAs: 'viewPlay'
  });

  function viewPlay($state) {
    var vm = this;
    };

})(angular);