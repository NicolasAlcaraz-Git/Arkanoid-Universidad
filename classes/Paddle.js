export default class Paddle {
  constructor(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.add.rectangle(x, y, 150, 20, 0x00ff00);
    scene.physics.add.existing(this.sprite, true);
    // Los cursores se crean aquí, propios de la paleta
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.moveRight();
    }
    this.constrain(75, 725);
    if (this.ball.sprite.y > this.game.config.height) {
        this.scene.restart();
    }
  }

  moveLeft() {
    this.sprite.x -= 5;
  }

  moveRight() {
    this.sprite.x += 5;
  }

  constrain(min, max) {
    if (this.sprite.x < min) this.sprite.x = min;
    if (this.sprite.x > max) this.sprite.x = max;
    this.sprite.body.updateFromGameObject(this.sprite);
  }
}