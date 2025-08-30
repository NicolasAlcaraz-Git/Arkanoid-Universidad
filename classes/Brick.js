export default class Brick {
  constructor(scene, x, y, width = 50, height = 20, color = 0xff0000, isStatic = true) {
    this.scene = scene;

    // dibuja la figura por código
    this.sprite = scene.add.rectangle(x, y, width, height, color);

    // activa las fisicas
    scene.physics.add.existing(this.sprite, isStatic);

    // guarda una referencia para poder manipular el cuerpo
    this.body = this.sprite.body;
  }

  // metodo pra destruir el objeto
  destroy() {
    this.sprite.destroy();
  }
}
