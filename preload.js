// Defining load state
var loadState = function(game){};

loadState.prototype = {


  create: function () {

    // Creating, scaling and positioning sprite
      logo = game.add.sprite (game.world.centerX, game.world.centerY*2/3, 'logo');
      logo.anchor.setTo(0.5);
      logo.scale.setTo(0.5,0.5);

      // Setting background colour
      game.stage.backgroundColor = "rgba(255, 177, 252, 0.5)";


  }
};
