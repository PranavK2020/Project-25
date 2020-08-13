class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
        World.add(world, this.body);
    }
    
    display() {
        var pos = this.body.positon;
        push();
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 20, 20);
        stroke("red");
        strokeWeight(4);
        fill(255);
        eclipse(0, 0, this.radius);
        pop();
    }
}