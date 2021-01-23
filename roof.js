class Roof{
    constructor(){
    
        var options={
            isStatic:true
        }
        
        this.body = Bodies.rectangle(400,150,400,20,options);
        this.w = 400;
        this.h=20
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("purple")
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }
    
    }