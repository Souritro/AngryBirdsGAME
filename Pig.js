class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.tintvar= 255
  }
display(){
  console.log(this.body.speed)
  if(this.body.speed<2.5){
   super.display()
  }
  else{

   World.remove(world,this.body)
   push ()
   this.tintvar=this.tintvar-5;
   tint (255,150,200,this.tintvar);
   image (this.image,this.body.position.x,this.body.position.y,50,50)
   pop ()
    
  }
}
};