class Umbrella{
    constructor(x, y) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, 150, 150, options);
        this.width = 150;
        this.height = 150;
        this.image = loadImage("umbrella.png");
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
}