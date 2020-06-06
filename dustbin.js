class Dustbin{
    constructor(x,y,width,height){
    var options = {
        setStatic : true
    
    }

    this.width = width;
    this.height = height;
    
    this.Body = Matter.Bodies.rectangle(x,y,width,height,options);

    }
   
      
        display(){
            var pos = this.Body.position
            var angle = this.Body.angle
            push();
            translate(pos.x,pos.y)
            fill ("red");
           rectMode(CENTER);
            
            rect(0,0,this.width,this.height)
            pop();
        }
        
      }
















