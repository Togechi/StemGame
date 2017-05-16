// Defining state
var bootState = function(game){};

bootState.prototype = {
  preload: function () {

    // Loading logo
      game.load.image('logo', 'assets/hydrogen.png');

// Smoothing disabled
      game.stage.smoothed = false;

},


create: function () {

  // Initiating physics system
game.physics.startSystem(Phaser.Physics.P2JS);

// Start load state
game.state.start('loadState');
}



};
