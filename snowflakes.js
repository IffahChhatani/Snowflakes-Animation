class SnowFlakes {
    constructor(x, y, width, height,img) {
        var options = {
            density: 1,
            friction: 0.8,
            restitution: 0.3
        }
        this.width = width;
        this.height = height;
        this.image = loadImage(img)
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        Matter.World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}