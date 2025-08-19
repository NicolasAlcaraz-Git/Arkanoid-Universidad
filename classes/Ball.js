export default class Ball {
  constructor(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.add.circle(x, y, 10, 0xffffff);
    scene.physics.add.existing(this.sprite);
    this.sprite.body.setCollideWorldBounds(true, 1, 1);
    this.sprite.body.setBounce(1, 1);
    this.sprite.body.setVelocity(250, -250);
  }

  Restart() {
    if (this.ball.sprite.y > this.game.config.height) {
      this.scene.restart();
    }
}
}