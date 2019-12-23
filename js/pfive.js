// This is the intro to javascript. 
// console.log("javascript linked up");

var district;

function preload(){
    district = loadTable("data/Cyclists_clean_extract.csv", "header");
    img = loadImage('images/gta-map_9x6.jpg');
    console.log('firing');
}

function setup(){
    createCanvas(900, 600);
    image(img, 0, 0);
    noStroke(2);
    noLoop();
    fill('rgba(0, 58, 154, 0.45)');
   // blendMode(MULTIPLY);
    // background(80, 150, 260, 80);
}

function draw() {
    scale(850);
    // higher x will increase the coordinate to the left
    // lower y will increase the coordinate
    translate(-251, -154);

    // for loop, check the rows and increment by one
    for(var i=0; i < district.getRowCount(); i++){
        // cycling through gathering lat and long
        var latitude = district.getNum(i, "LATITUDE");
        var longtitude = district.getNum(i, "LONGITUDE");
        // var bubble = district.getNum(i, "density")*0.001;
        // pass the lan and long now
        setXY(latitude, longtitude);
        // console.log(district);
    }

    // this function expects lat and lng to be passed
    function setXY(lat, lng) {
        var x = map(lng, -180, 180, 0, width);
        var y = map(lat, 90, -90, 0, height);
        ellipse(x,y,.009,.009);
        
    }
}
