const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles = [];

function setup() {
  createCanvas(480,700);
  
  engine = Engine.create();
	world = engine.world;
	
  Engine.run(engine);
  


  ground1 = new Ground(100,650,800,10)
  division1 = new Division(480,500,15,300)
  division2 = new Division(400,500,10,300)
  division3 = new Division(320,500,10,300)
  division4 = new Division(240,500,10,300)
  division5 = new Division(160,500,10,300)
  division6 = new Division(80,500,10,300)
  division7 = new Division(0,500,15,300)

  plinko1 = new Plinko(10,100,10)
  plinko2 = new Plinko(60,100,10)
  plinko3 = new Plinko(110,100,10)
  plinko4 = new Plinko(160,100,10)
  plinko5 = new Plinko(210,100,10)
  plinko6 = new Plinko(260,100,10)
  plinko7 = new Plinko(310,100,10)
  plinko8 = new Plinko(360,100,10)
  plinko9 = new Plinko(410,100,10)
  plinko10 = new Plinko(460,100,10)

  plinko11 = new Plinko(35,150,10)
  plinko12 = new Plinko(85,150,10)
  plinko13 = new Plinko(135,150,10)
  plinko14 = new Plinko(185,150,10)
  plinko15 = new Plinko(235,150,10)
  plinko16 = new Plinko(285,150,10)
  plinko17 = new Plinko(335,150,10)
  plinko18 = new Plinko(385,150,10)
  plinko19 = new Plinko(435,150,10)
  
  plinko20 = new Plinko(10,200,10)
  plinko21 = new Plinko(60,200,10)
  plinko22 = new Plinko(110,200,10)
  plinko23 = new Plinko(160,200,10)
  plinko24 = new Plinko(210,200,10)
  plinko25 = new Plinko(260,200,10)
  plinko26 = new Plinko(310,200,10)
  plinko27 = new Plinko(360,200,10)
  plinko28 = new Plinko(410,200,10)
  plinko29 = new Plinko(460,200,10)

  plinko30 = new Plinko(35,250,10)
  plinko31= new Plinko(85,250,10)
  plinko32 = new Plinko(135,250,10)
  plinko33 = new Plinko(185,250,10)
  plinko35 = new Plinko(235,250,10)
  plinko36 = new Plinko(285,250,10)
  plinko37 = new Plinko(335,250,10)
  plinko38 = new Plinko(385,250,10)
  plinko34 = new Plinko(435,250,10)

  //particle = new Particles(250,50,10)
}

function draw() {
  background(205); 

  if(frameCount%80 === 0){
    var posX=Math.round(random(20,460))
    var particle = new Particles(posX,0,10)  
    particles.push(particle);
  }

  for(var i=0; i< particles.length; i++){
    particles[i].display();
  }
    
  ground1.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()

  plinko1.display()
  plinko2.display()
  plinko3.display()
  plinko4.display()
  plinko5.display()
  plinko6.display()
  plinko7.display()
  plinko8.display()
  plinko9.display()
  plinko10.display()

  plinko11.display()
  plinko12.display()
  plinko13.display()
  plinko14.display()
  plinko15.display()
  plinko16.display()
  plinko17.display()
  plinko18.display()
  plinko19.display()

  plinko20.display()
  plinko21.display()
  plinko22.display()
  plinko23.display()
  plinko24.display()
  plinko25.display()
  plinko26.display()
  plinko27.display()
  plinko28.display()
  plinko29.display()
  
  plinko30.display()
  plinko31.display()
  plinko32.display()
  plinko33.display()
  plinko34.display()
  plinko35.display()
  plinko36.display()
  plinko37.display()
  plinko38.display()
  
}
