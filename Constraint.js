class Rope{
    constructor(A,B,x,y){
    
        this.x = x 
        this.y = y

        var options={
            bodyA:A,
            bodyB:B,
            stiffness:0.4,
            pointB:{x:this.x, y:this.y}
        }
    
        this.body = Matter.Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        line(this.body.bodyA.position.x, this.body.bodyA.position.y,this.body.bodyB.position.x+this.x, this.body.bodyB.position.y+this.y);
    }
    
    }