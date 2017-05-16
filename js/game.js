var gameState = {


preload: function (){
    var player;
    var cursors;


    function create () {

game.add.tileSprite(0, 0, 1366, 768, );
game.world.setBounds(0, 0, 800, 768);
game.physics.startSystem(Phaser.Physics.P2JS);
player = game.add.sprite(      game.world.centerX, game.world.centerY, '');
game.physics.p2.enable(player);
player.body.fixedRotation = true;
cursors = game.input.keyboard.createCursorKeys();
game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    }

    function update() {

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

    }

    function render() {

        game.debug.cameraInfo(game.camera, 32, 32);

    }
}
};
