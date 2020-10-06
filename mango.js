class Mango {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;

        // this.radius = radius;
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(x, y, this.r * 2, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(this.body.rotate);
        fill(255, 0, 255);
        imageMode(CENTER)
        ellipseMode(RADIUS)
        image(this.image, 0, 0, this.r * 2, this.r * 2);
        pop()
    }
}