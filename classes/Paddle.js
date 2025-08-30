import Brick from "./Brick.js";

export default class Paddle extends Brick {
  constructor(scene, x, y) {
    // modifica el recangulo con tamaño y color propios
    super(scene, x, y, 150, 20, 0x00ff00, false);

    // la barra queda inmobil por colisiones
    this.body.setImmovable(true);

    // controles del teclado
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    // movimiento lateral con flechas
    if (this.cursors.left.isDown) {
      this.sprite.x -= 10;
    } else if (this.cursors.right.isDown) {
      this.sprite.x += 10;
    }

    // restringir la barra a la pantalla
    this.constrain(75, 725);
  }

  constrain(minX, maxX) {
    if (this.sprite.x < minX) this.sprite.x = minX;
    if (this.sprite.x > maxX) this.sprite.x = maxX;
  }
}
