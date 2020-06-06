class PaperBall {
    constructor(x,y,r){
var options ={
    isStatic : false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
    

this.body = Bodies.circle(x, y, r, options);
this.r = this.radiusradius;
this.x = x;
this.y = y;
r = this.radius
//World.add(this.body)

}
display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y)
    fill ("green");
    ellipseMode(CENTER);
    
    ellipse(0,0,this.r,this.r)
    pop();
}
}

