// Defining load state
var loadState = function(game){};

loadState.prototype = {
  preload: function() {

    // Load assets needed
    game.load.image('startButton', 'assets/Start.png');
    game.load.image('optionsButton', 'assets/Options.png');
    game.load.image('menuBackground', 'assets/MenuBackground.png');
  },


  create: function () {

    // Creating, scaling and positioning sprite
      logo = game.add.sprite (game.world.centerX, game.world.centerY*2/3, 'logo');
      logo.anchor.setTo(0.5);
      logo.scale.setTo(0.5,0.5);

      // Setting background colour
      game.stage.backgroundColor = "rgba(255, 177, 252, 0.5)";

// Start menu state
game.state.start('menuState');
  }
};
