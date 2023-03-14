function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("skyblue");

    //center line
    stroke("lime");
    strokeWeight(3);
    line(200,0,200,height);

    // the sun
    fill("yellow");
    stroke("orange");
    strokeWeight(2);
    ellipse(100,100,100,100);

    //the clouds
    fill("white");
    stroke("lightblue");
    strokeWeight(2);
    ellipse(60,200,100,50);

    fill("white");
    stroke("lightblue");
    strokeWeight(2);
    ellipse(100,230,100,50);

    fill("white");
    stroke("lightblue");
    strokeWeight(2);
    ellipse(140,200,100,50);

    //half background
    fill("lightgreen");
    noStroke();
    rect(200,0,200,400);

    // message
    let airMessage = 'Level 1 codes! Easy'
    fill("black");
    text(airMessage, 10, 10, 70, 80);

    //treetop

    fill("green");
    noStroke();
    triangle(300,200,250,250,350,250);

    fill("green");
    noStroke();
    triangle(300,175,250,225,350,225);

    fill("green");
    noStroke();
    triangle(300,150,250,200,350,200);

    fill("green");
    noStroke();
    triangle(300,125,250,175,350,175);

    //treetrunk

    fill("brown");
    stroke("red");
    strokeWeight(2);
    rect(290,250,20,150,2);

    //grass

    fill("green");
    noStroke();
    rect(200,390,200,10);

}