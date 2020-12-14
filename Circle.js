class Circle{

    constructor(bodyA,pointB){
    
    
        var options = {
    
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.4,
            length: 10
        
        
        }
    
        this.circle = Constraint.create(options);
        World.add(world,this.chain);
    }
    
    display(){
    var bodyA=this.circle.bodyA.position;
    var pointB=this.circle.bodyB.position;
    
        line(bodyA.x,bodyA.y,pointB.x,pointB.y);
    
    
    
    
    }
}