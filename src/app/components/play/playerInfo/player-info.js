(function(angular) {

  angular.module('app').component('playerInfo', {
    templateUrl:  'app/components/play/playerinfo/player-info-template.html',
    controller: [ 'playersFactory', playerInfo],
    controllerAs: 'playerInfo'
  });

  function playerInfo(playersFactory) {
    var vm = this;
 
    vm.$onInit = function() {
      vm.playerUsername = playersFactory.newPlayer.username
      vm.playerAvatar= playersFactory.newPlayer.avatar
    };
  }

})(angular);