// Initialisng Phaser framework
var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

// Adding States
game.state.add('bootState', bootState);
game.state.add('loadState', loadState);
game.state.add('menuState', menuState);
game.state.add('map1State', map1State);
// Starting the boot state1
game.state.start('bootState');
