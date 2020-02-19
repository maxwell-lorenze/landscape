// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(571,321).parent('p5')
    noLoop()
}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(71,100,173)

    // draw here!
    strokeWeight(10)
    stroke(110,163,198)//light blue
    point(5,5)
    point(10,5)
    point(15,5)
    point(20,5)
    point(5,10)
    stroke(133,171,188)//lighter blue
    point(25,5)
    point(30,5)
    stroke(156,180,179)//greyish blue
    point(10,10)
    point(15,10)
    point(20,10)
    point(5,15)
    point(10,15)
    point(15,15)
    point(20,15)
    point(5,20)
    point(5,310)
    point(5,315)
    point(5,320)
    stroke(182,182,146)//greyish yellow
    point(5,25)
    point(5,30)
    stroke(201,175,112)//mustard
    point(5,35)
    point(5,40)
    stroke(210,175,100)//yellower mustard
    point(5,45)
    point(5,50)
    point(5,55)
    point(5,80)
    point(5,105)
    stroke(218,175,88)//even yellower mustard
    point(5,60)
    point(5,65)
    point(5,70)
    point(5,75)
    point(5,85)
    point(5,90)
    point(5,100)
    stroke(221,142,44)//bright orange
    point(5,95)
    stroke(219,148,73)//burnt orange
    point(5,110)
    point(5,115)
    stroke(193,123,84)//brownish red
    point(5,120)
    point(5,125)





    //for clock tower
    fill(62,90,101)//greyish
    beginShape()
    curveVertex()
    fill(114,66,63)//marron


  }



// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
