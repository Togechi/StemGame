var menuState = function(game) {};

menuState.prototype = {

    create: function() {

// Set background for menu
    menuBackground = game.add.image(0, 0, 'menuBackground');

// Add and position start button || Onclick run function start
    startButton = game.add.button(game.world.centerX, game.world.centerY*2/3, 'startButton', this.start, game);
    startButton.anchor.setTo(0.5);

// Add and positon options button || Need to add onclick function
    optionsButton = game.add.image(game.world.centerX, game.world.centerY*4.5/3, 'optionsButton');
    optionsButton.anchor.setTo(0.5);



  },

start: function () {

// Start map 1 state on click     
    game.state.start('map1State');
}
};
