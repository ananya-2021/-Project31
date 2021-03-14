class Drop {
  constructor(x, y) {
    var options = {
        'friction':0.1,
        'restitution' : 1
    }
    this.body = Bodies.circle(x,y,4, options);
    this.radius = 4;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(0,0,4,4);
    if(this.body.position.y > 600){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,600)});
    }
    pop();
  }
};


  
   