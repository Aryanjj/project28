class Tree {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 450;
        this.height = 600;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        imageMode(CENTER)
        image(this.image, 1050, this.height / 2, this.width, this.height);
        pop()
    }
}