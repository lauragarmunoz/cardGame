'use strict';

(function(angular) {
  
  var dependenciasProyecto = ['ui.router'];

  angular.module('app', dependenciasProyecto);

   angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
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

    var signup = {
      name: 'signup',
      url: '/signup',
      template: '<view-signup></view-signup>'
    };

    $stateProvider.state(main);
    $stateProvider.state(about);
    $stateProvider.state(play);
    $stateProvider.state(signup);
    

    /* Definimos una ruta por defecto: */
    $urlRouterProvider.otherwise('/main');

  }

})(angular);