import Brick from "./Brick.js";

export default class Ball extends Brick {
  constructor(scene, x, y) {
    // crea un circulo en lugar de un rectangulo
    super(scene, x, y, 20, 20, 0xffffff, false);

    // reemplaza el rectangulo por un circulo
    this.sprite.destroy(); // elimina el rectangulo
    this.sprite = scene.add.circle(x, y, 10, 0xffffff);
    scene.physics.add.existing(this.sprite, false);
    this.body = this.sprite.body;

    // configuracion de fisicas
    this.body.setCollideWorldBounds(true, 1, 1);
    this.body.setBounce(1, 1);
    this.body.setVelocity(250, -250);
  }

  update() {
    // si la pelota se cae abajo, reinicia la escena
    if (this.sprite.y > this.scene.sys.game.config.height) {
      this.scene.scene.restart();
    }
  }
}
