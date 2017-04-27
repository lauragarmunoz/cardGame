(function(angular) {

  angular.module('app').component('viewAbout', {
    templateUrl:  'app/components/about/about-template.html',
    controller: ['$state', viewAbout],
    controllerAs: 'viewAbout'
  });

  function viewAbout($state) {
    var vm = this;
    };

})(angular);