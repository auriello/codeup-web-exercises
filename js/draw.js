function setup() {
    createCanvas(600, 600);
}

function draw() {
    background("#180209");

    //arc
    fill("purple");
    strokeWeight(8);
    stroke("rgb(219,96,219)");
    arc(0,0,600,600,0,90);

    fill("rgb(219,96,219)");
    strokeWeight(8);
    stroke("purple");
    arc(600,600,600,600,190,270);

    fill("rgb(219,96,219)");
    strokeWeight(8);
    stroke("purple");
    arc(15,600,540,590,160,270);

    fill("rgb(219,96,219)");
    strokeWeight(8);
    stroke("purple");
    arc(600,80,600,440,190,70);


    //X Y TOOL
    //it uses mouseX and mouseY


    //left fist
    fill("#B46244");
    noStroke();
    quad(45,100,60,100,65,131,50,134);

    fill("#B46244");
    noStroke();
    quad(65,95,95,85,100,148,79,148);

    fill("#B46244");
    noStroke();
    quad(100,85,120,85,125,140,105,140);

    fill("#B46244");
    noStroke();
    quad(126,95,140,95,140,130,125,130);

    //thumb
    fill("#B46244");
    noStroke();
    rect(90,140,45,20,5);
    rect(118,140,25,35,3);

    //palm

    fill("#B46244");
    noStroke();
    quad(100,170, 144,170,120,200,95,200);
    quad(40,170,90,170,90,200,58,200);

    // middle fist

    fill("#795548");
    noStroke();
    quad(195,288,232,265,243,345,232,350);

    fill("#795548");
    noStroke();
    quad(233,258,275,250,285,348,255,350);

    fill("#795548");
    noStroke();
    quad(280,255,315,250,320,327,290,340);

    fill("#795548");
    noStroke();
    quad(320,260,350,260,340,315,325,320);

    //thumb

    fill("#795548");
    noStroke();
    quad(300,347,360,330,370,370,305,375);

    fill("#795548");
    noStroke();
    quad(332,370,370,370,373,380,335,395);

    //palm
    fill("#795548");
    noStroke();
    quad(300,400,373,380,335,460,240,455);

    fill("#795548");
    noStroke();
    quad(215,418,277,417,240,453,230,450);

    //right fist

    fill("tan");
    noStroke();
    quad(445,101,460,100,465,131,450,134);

    fill("tan");
    noStroke();
    quad(465,95,495,85,500,155,479,155);

    fill("tan");
    noStroke();
    quad(500,85,520,85,525,140,505,140);

    fill("tan");
    noStroke();
    quad(526,95,540,95,540,130,525,130);

    //thumb
    fill("tan");
    noStroke();
    rect(440,135,45,20,5);
    rect(440,135,25,35,3);


    //palm

    fill("tan");
    noStroke();
    quad(500,160,544,160,530,200,500,200);
    quad(440,160,495,160,495,200,458,200);



    //line
    stroke("orange");
    strokeWeight(4);
    line(485,129,90,130);

    stroke("orange");
    strokeWeight(4);
    line(485,139,90,140);

    //circles

    fill("#E91E63");
    noStroke();
    ellipse(500,500,100,100);

    fill("#E91E63");
    noStroke();
    ellipse(100,500,100,100)

    fill("yellow");
    stroke("lime");
    strokeWeight(2);
    square(520,282,37);

    fill("yellow");
    stroke("lime");
    strokeWeight(2);
    square(40,282,37);


}