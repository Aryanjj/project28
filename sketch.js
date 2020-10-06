const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, ground, tree, stone, mango1, mango2, mango3, launcher;

function preload() {
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width / 2, 600, 1300, 20);
	tree = new Tree(1050, 500);
	stone = new Stone(235, 420, 30);
	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1170, 150, 30);
	mango3 = new Mango(1030, 200, 30);
	launcher = new Launcher(stone.body, {
		x: 235,
		y: 420
	});

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(220);
	image(boy, 200, 340, 200, 300);
	ground.display();
	tree.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	launcher.display();
	drawSprites();

}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {
		x: mouseX,
		y: mouseY
	});

}

function mouseReleased() {
	launcher.fly();
}