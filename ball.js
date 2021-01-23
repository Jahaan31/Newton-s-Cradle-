class Ball{
constructor(x,y){

    var options={
        restitution:1,
        density:0.8
    }

    this.body = Bodies.circle(x,y,30,options);
    this.r = 30;
    World.add(world,this.body);
}
display(){
    ellipseMode(RADIUS);
    fill("pink")
    ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
}

}