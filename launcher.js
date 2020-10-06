class Launcher {
    constructor(body, point) {
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.004,
            length: 1
        }
        this.pointB = point;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    fly() {
        this.launcher.bodyA = null;
    }

    display() {
        if (this.launcher.bodyA) {
            var start = this.launcher.bodyA.position;
            var end = this.pointB;
            strokeWeight(4);
            line(start.x, start.y, end.x, end.y);
        }

    }

}