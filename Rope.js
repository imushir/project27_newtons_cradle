class Rope {
  constructor(body1, body2, offsetX, offsetY) {

    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA: body1,
      bodyB: body2,
      pointB: { x: this.offsetX, y: this.offsetY }
    }
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  display() {
    var pointA = this.rope.bodyB.position;
    var pointB = this.rope.bodyA.position;

    strokeWeight(3);
   console.log("pointA.x " + pointA.x);
   console.log("pointA.y " + pointA.y);
    var Anchor1X = pointA.x;
    var Anchor1Y = pointA.y;
    console.log("pointB.x " + pointB.x);
    console.log("pointB.y " + pointB.y);
    var Anchor2X = pointB.x + this.offsetX;
    var Anchor2Y = pointB.x + this.offsetY;
  
    line(Anchor2X - 100, Anchor1X - 70, Anchor2Y, Anchor1Y);
     

  }
}