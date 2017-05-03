'use strict';

(function(angular) {
  
  var dependenciasProyecto = ['ui.router', 'ngAnimate'];

  angular.module('app', dependenciasProyecto);

  angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var signup = {
        name: 'signup',
        url: '/signup',
        template: '<view-signup></view-signup>'
      };


      var about = {
        name: 'about',
        url: '/about',
        template: '<view-about></view-about>'
      };

      var play = {
            name: 'play',
            url: '/play',
            template: '<view-play></view-play>'
          };

      var login = {
        name: 'login',
        url: '/login',
        template: '<view-login></view-login>'
      };

      $stateProvider.state(main);
      $stateProvider.state(signup);
      $stateProvider.state(about);
      $stateProvider.state(play);
      $stateProvider.state(login);
      

      $urlRouterProvider.otherwise('/main');

  }

})(angular);