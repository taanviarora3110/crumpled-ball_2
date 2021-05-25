class Paper{
	constructor(x,y,r)
	{

		var options = {
            isstatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
			
		}
	this.image=loadImage("paper.png");
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
        
	}
	display()
    
	{
			var paperPos=this.body.position;		
			push()
           
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("white");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			
        image(this.image,-50,-150,120);
			pop();
			
	}

}