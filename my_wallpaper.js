//your parameter variables go here!

//Change colours of mountains and shadows
//original colours to refer back to 
//let mountainBackColour = [143, 133, 135]; //light grey colour
//let mountainFrontColour = [127, 140, 104];

//let mountainShadowBackColour = [61, 57, 58]; 
//let mountainShadowFrontColour = [85, 92, 72]; 

//Change colours of mountains and shadows of the top half of the mountains
let mountainBackColour = [143, 133, 135]
let mountainFrontColour = [127, 140, 104];
let mountainShadowBackColour = [61, 57, 58]; 
let mountainShadowFrontColour = [85, 92, 72]; 
//change colours of the mountains and shadows of the bottom half of the mountains
//they are currently the sam as the top half but you can change it if you want
let mountainBackBelowColour = [201, 245, 209]; //light brown colour
let mountainFrontBelowColour = [222, 100, 143]; //green colour
let mountainShadowBackBelowColour = [51, 82, 57]; //dark brown colour
let mountainShadowFrontBelowColour = [107, 3, 40]; //dark green colour

//mountains(0 + mountainsX, 0 + mountainsY) is the position of the mountains
let mountainsX = 0; // x position of the mountains
let mountainsY = 0; // y position of the mountains
let mountainsBelowX = 0; //x positon of the mountains below
let mountainsBelowY = 0; //y position of the mountains below

let setTime = 0; //use 1 or 0 to select night or day 


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
   if (setTime == 0) { //day
    background(160, 186, 217); //light blue  colour
   } else { //night
    background(3, 38, 87); //dark blue colour
   }

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  skyline(0 + mountainsX, 0 + mountainsY); //draw the skyline

  mountains(0 + mountainsX, 0 + mountainsY);  
  mountainsBelow(0 + mountainsBelowX, 0 + mountainsBelowY); 
  

}

function mountains(x, y) {
  //mountains 
  //tophalf
  var middleYaxis = 100; //this is the middle of the y axis 

  //mountainBack - creating a mountain that will be taller than front mountains and sit behind them 
  //fill(143, 133, 135); //light brown colour
  fill(mountainBackColour); //light brown colour
  noStroke();
  triangle(0 + x, middleYaxis + y, 30 + x, 30 + y, 60 + x, middleYaxis + y,); //triangle 1 back 
  triangle(10 + x, middleYaxis + y, 60 + x, 10 + y, 120 + x, middleYaxis + y,); //triangle 2 back
  triangle(50 + x, middleYaxis + y, 90 + x, 10 + y, 150 + x, middleYaxis + y,); //triangle 3 back 
  triangle(70 + x, middleYaxis + y, 130 + x, 20 + y, 180 + x, middleYaxis + y,); //triangle 4 back 
  
  //mountainbackShadow - creating a shadow for the back mountains
  //gives the moutain a 3D effect
  fill(mountainShadowBackColour); //dark brown colour
  noStroke();
  triangle(0 + x, middleYaxis + y, 30 + x, 30 + y, 10 + x, middleYaxis + y); //triangle 1 back shadow
  triangle(10 + x, middleYaxis + y, 60 + x, 10 + y, 40 + x, middleYaxis + y); //triangle 2 back shadow 
  triangle(50 + x, middleYaxis + y, 90 + x, 10 + y, 70 + x, middleYaxis + y); //triangle 3 back shadow
  triangle(70 + x, middleYaxis + y, 130 + x, 20 + y, 110 + x, middleYaxis + y); //triangle 4 back shadow
  
//mountainFront - creating a mountain that will be shorter than back mountains and sit in front of them
  fill(mountainFrontColour); //green colour
  noStroke();
  triangle(5 + x, middleYaxis + y, 30 + x, 50 + y, 50 + x, middleYaxis + y); //triangle 1 front
  triangle(30 + x, middleYaxis + y, 60 + x, 30 + y, 100 + x, middleYaxis + y); //triangle 2 front
  triangle(60 + x, middleYaxis + y, 110 + x, 10 + y, 150 + x, middleYaxis + y); //triangle 3 front
  triangle(120 + x, middleYaxis + y, 150 + x, 50 + y, 180 + x, middleYaxis + y); //triangle 4 front
  triangle(130 + x, middleYaxis + y, 170 + x, 40 + y, 200 + x, middleYaxis + y); //triangle 5 front

//mountainFrontShadow - creating a shadow for the back mountains
  //gives the moutain a 3D effect
  fill(mountainShadowFrontColour); //dark green colour
  noStroke();
  triangle(5 + x, middleYaxis + y, 30 + x, 50 + y, 20 + x, middleYaxis + y); //triangle 1 front shadow
  triangle(30 + x, middleYaxis + y, 60 + x, 30 + y, 40 + x, middleYaxis + y); //triangle 2 front shadow
  triangle(60 + x, middleYaxis + y, 110 + x, 10 + y, 80 + x, middleYaxis + y); //triangle 3 front shadow
  triangle(120 + x, middleYaxis + y, 150 + x, 50 + y, 130 + x, middleYaxis + y); //triangle 4 front shadow
  triangle(130 + x, middleYaxis + y, 170 + x, 40 + y, 150 + x, middleYaxis + y); //triangle 5 front shadow

}

function mountainsBelow(x, y) {
//mountainsbelow - this is creating the same mountain ranges but flipped upside down and underneath the top mountains
//bottomhalf
var middleYaxis = 100; //this is the middle of the y axis  

//mountainBelowBack - creating back mountain ranges for the below scene
fill(mountainBackBelowColour); //light brown colour
noStroke();
triangle(0 + x, middleYaxis + y, 30 + x, 170 + y, 60 + x, middleYaxis + y); //tri1 back below
triangle(10 + x, middleYaxis + y, 60 + x, 190 + y, 120 + x, middleYaxis + y); //tri2 back below
triangle(50 + x, middleYaxis + y, 90 + x, 190 + y, 150 + x, middleYaxis + y); //tri3 back below
triangle(70 + x, middleYaxis + y, 130 + x, 180 + y, 180 + x, middleYaxis + y); //tri4 back below

//mountainBelowShadow - creating a shadow for the back mountains reflected below
  fill(mountainShadowBackBelowColour); //dark brown colour
  noStroke(); 
  triangle(0 + x, middleYaxis + y, 30 + x, 170 + y, 10 + x, middleYaxis + y); //tri1 back shadow below
  triangle(10 + x, middleYaxis + y, 60 + x, 190 + y, 40 + x, middleYaxis + y); //triangle 2 back shadow 
  triangle(50 + x, middleYaxis + y, 90 + x, 190 + y, 70 + x, middleYaxis + y); //triangle 3 back shadow
  triangle(70 + x, middleYaxis + y, 130 + x, 180 + y, 110 + x, middleYaxis + y); //triangle 4 back shadow

//mountainFront - creating the front mountains reflected below
  fill(mountainFrontBelowColour); //green colour
  noStroke(); 
  triangle(5 + x, middleYaxis + y, 30 + x, 150 + y, 50 + x, middleYaxis + y); //triangle 1 front
  triangle(30 + x, middleYaxis + y, 60 + x, 170 + y, 100 + x, middleYaxis + y); //triangle 2 front
  triangle(60 + x, middleYaxis + y, 110 + x, 190 + y, 150 + x, middleYaxis + y); //triangle 3 front
  triangle(120 + x, middleYaxis + y, 150 + x, 150 + y, 180 + x, middleYaxis + y); //triangle 4 front
  triangle(130 + x, 101 + y, 170 + x, 160 + y, 200 + x, middleYaxis + y); //triangle 5 front

//mountainFrontShadow - creating a shadow for the front mountains reflected below
  fill(mountainShadowFrontBelowColour); //dark green colour
  noStroke();
  triangle(5 + x, middleYaxis + y, 30 + x, 150 + y, 20 + x, middleYaxis + y); //triangle 1 front shadow
  triangle(30 + x, middleYaxis + y, 60 + x, 170 + y, 40 + x, middleYaxis + y); //triangle 2 front shadow
  triangle(60 + x, middleYaxis + y, 110 + x, 190 + y, 80 + x, middleYaxis + y); //triangle 3 front shadow
  triangle(120 + x, middleYaxis + y, 150 + x, 150 + y, 130 + x, middleYaxis + y); //triangle 4 front shadow
  triangle(130 + x, middleYaxis + y, 170 + x, 160 + y, 150 + x, middleYaxis + y); //triangle 5 front shadow


  
}

function skyline() {
  fill(250, 235, 147) //light yellow colour 
  noStroke(); 
  beginShape();
  
  //vertex for top skyline
  vertex(0, 100,);
  vertex(30, 10);
  vertex(40, 30);
  vertex(60, 0);
  vertex(78, 25);
  vertex(90, 0);
  vertex(100, 15);
  vertex(110, 0);
  vertex(120, 20);
  vertex(130, 10);
  vertex(155, 45);
  vertex(170, 30);
  vertex(200, 100);

  //vertext for bottom skyline
  vertex(0, 100);
  vertex(30, 190);
  vertex(40, 170);
  vertex(60, 200);
  vertex(75, 175);
  vertex(90, 200);
  vertex(100, 185);
  vertex(110, 200);
  vertex(120, 180);
  vertex(130, 190);
  vertex(155, 155);
  vertex(170, 170);
  vertex(200, 100);
  endShape();

}

