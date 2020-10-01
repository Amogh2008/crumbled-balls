class Paper  {

constructor(x,y,width,height);

var options = {

    isStatic: false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2;

}

this.body = bodies.circle(x,y,width,height,option);
World.add(world,this.body);
}

display(){

Push();
translate(pos.x,pos.y);
var pos = this.body.position;
circle(pos.x,pos.y,this.width,this.height);
pop();

}