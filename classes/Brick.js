export default class Brick {
  constructor(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.add.rectangle(x, y, 50, 20, 0xff0000);
    scene.physics.add.existing(this.sprite, true);
  }
}