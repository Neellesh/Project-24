class PlayerArcher {
    constructor(x, y, width, height) {

      var options = {
        isStatic: true

      };

      this.PlayerarcherImage = loadImage("assets/playerArcher.png");
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);

      World.add(world, this.body);

      Matter.Body.setAngle(this.body, -PI / 2);
    }

    display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      

      if (keyIsDown(LEFT_ARROW) && angle > -2) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }

      if (keyIsDown(RIGHT_ARROW) && angle < -1.2 ) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
      }

      push();

      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.PlayerarcherImage, 0, 0, this.width, this.height);

      pop();

    }
  }