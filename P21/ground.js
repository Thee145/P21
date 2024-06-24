class Ground {
    constructor(x, y, width, height) {
        this.body = Matter.Bodies.rectangle(x, y, width, height, { isStatic: true });
        Matter.World.add(world, this.body);
        this.width = width;
        this.height = height;
    }

    display() {
        let pos = this.body.position;
        rectMode(CENTER);
        fill(120, 60, 0);
        rect(pos.x, pos.y, this.width, this.height);
    }
}