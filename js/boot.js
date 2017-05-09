// Defining state
var bootState = function(game){};

bootState.prototype = {
  preload: function () {

    // Loading logo
      game.load.image('logo', 'assets/hydrogen.png');



},


create: function () {

  // Initiating physics system
game.physics.startSystem(Phaser.Physics.P2JS);



var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
wkey.onDown.addOnce(this.start, this);




},

start: function () {
  game.state.start('loadState');  
}

};
