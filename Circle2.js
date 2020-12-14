class Circle2{

    constructor(x,y,r){
    
    var option = {
    
   isStatic  : false,restitution : 0.3,friction:0.5,density:1.2
    }
    
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(  this.x,  this.y,  this.r/2,option);
    World.add(world,this.body);

    
    
    }
    
    display(){
    var  pos = this.body.position


   push()
   translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("purple");
    ellipse(0,0,this.r,this.r);
     pop()
    }
}