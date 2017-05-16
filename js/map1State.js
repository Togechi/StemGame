var map1State = function(game) {};

map1State.prototype = {

preload: function () {
  game.load.tilemap('map1', 'assets/mapcollide.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('map1_set', 'assets/tilemap.png');
  game.load.image('player', 'assets/player.png');

},



create: function () {
  map1 = game.add.tilemap('map1', 32, 32);
//map1.setCollision(2);
  map1.addTilesetImage('set_00','map1_set');

  tilemapLayer = map1.createLayer('Tilemap');

  collisionLayer = map1.createLayer('Collision');
//map1.setCollision(2);

  game.world.setBounds(0, 0, 1280, 960);
    game.physics.startSystem(Phaser.Physics.P2JS);
    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    game.physics.p2.enable(player);
    player.body.fixedRotation = true;
    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

},



update: function () {
  player.body.setZeroVelocity();

if (cursors.up.isDown)
{
    player.body.moveUp(300);
}
else if (cursors.down.isDown)
{
    player.body.moveDown(300);
}

if (cursors.left.isDown)
{
    player.body.velocity.x = -300;
}
else if (cursors.right.isDown)
{
    player.body.moveRight(300);
}

game.physics.p2.collide(player, collisionLayer);

}

};
