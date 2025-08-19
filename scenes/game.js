import Ball from "../classes/ball.js";
import Brick from "../classes/Brick.js";
import Paddle from "../classes/Paddle.js";
class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  create() {
    // creacion de la barra
    this.paddle = new Paddle(this, 400, 550);

    // texto de score en pantalla
    this.score = 0;
    this.scoreText = this.add.text(16, 16, "Score: 0", {
      fontSize: "40px",
      fill: "#fbff00ff"
    });

    // creacion de la pelota
    this.ball = new Ball(this, 400, 300);

    // creacion de los ladrillos
    this.bricks = this.physics.add.staticGroup();
    for (let x = 100; x < 720; x += 70) {
      for (let y = 100; y < 250; y += 40) {
        let brickObj = new Brick(this, x, y);
        this.bricks.add(brickObj.sprite);
      }
    }

    // grupos de colisiones
    this.physics.add.collider(this.ball.sprite, this.paddle.sprite);
    this.physics.add.collider(this.ball.sprite, this.bricks, this.hitBrick, null, this);

    // controles del juego
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    this.paddle.update();
    if (this.ball.sprite.y > this.game.config.height) {
      this.scene.restart();
    }
  }

  hitBrick(ball, brick) {
    brick.destroy();
    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);
    if (this.bricks.countActive() === 0) {
      this.scene.restart();
    }
  }
}
export default Game;