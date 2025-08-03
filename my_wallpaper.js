//your parameter variables go here!
let mountainBackColour = [143, 133, 135]; //light grey colour
let mountainFrontColour = [127, 140, 104]; //green colour

let mountainStart = 100;  //start position of the front and back mountains
let mountainFinish = 100; //finish position of the front and back mountains



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
  background(160, 186, 217); //light blue  colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  mountains(20, 40);  

}

function mountains(x, y) {
  //mountains 

  //mountainBack 
  fill(143, 133, 135); //light grey colour
  noStroke();
  triangle(0 + x, mountainStart + y, 30 + x, 30 + y, 60 + x, mountainFinish + y,); //triangle 1 back
  triangle(10 + x, mountainStart + y, 60 + x, 10 + y, 120 + x, mountainFinish + y,); //triangle 2 back
  triangle(50 + x, mountainStart + y, 90 + x, 10 + y, 150 + x, mountainFinish + y,); //triangle 3 back 
  triangle(70 + x, mountainStart + y, 130 + x, 20 + y, 180 + x, mountainFinish + y,); //triangle 4 back 
  
  //mountainbackShadow
  fill(61, 57, 58); //dark grey colour
  noStroke();
  triangle(0 + x, 100 + y, 30 + x, 30 + y, 10 + x, 100 + y); //triangle 1 back shadow
  triangle(10 + x, 100 + y, 60 + x, 10 + y, 40 + x, 100 + y); //triangle 2 back shadow 
  triangle(50 + x, 100 + y, 90 + x, 10 + y, 70 + x, 100 + y); //triangle 3 back shadow
  triangle(70 + x, 100 + y, 130 + x, 20 + y, 110 + x, 100 + y); //triangle 4 back shadow
  
//mountainFront
  fill(127, 140, 104); //green colour
  noStroke();
  triangle(5 + x, mountainStart + y, 30 + x, 50 + y, 50 + x, mountainFinish + y); //triangle 1 front
  triangle(30 + x, mountainStart + y, 60 + x, 30 + y, 100 + x, mountainFinish + y); //triangle 2 front
  triangle(60 + x, mountainStart + y, 110 + x, 10 + y, 150 + x, mountainFinish + y); //triangle 3 front
  triangle(120 + x, mountainStart + y, 150 + x, 50 + y, 170 + x, mountainFinish + y); //triangle 4 front
  triangle(130 + x, mountainStart + y, 170 + x, 40 + y, 200 + x, mountainFinish + y); //triangle 5 front

//mountainFrontShadow
  fill(85, 92, 72); //dark green colour
  noStroke();
  triangle(5 + x, 100 + y, 30 + x, 50 + y, 20 + x, 100 + y); //triangle 1 front shadow
  triangle(30 + x, 100 + y, 60 + x, 30 + y, 40 + x, 100 + y); //triangle 2 front shadow
  triangle(60 + x, 100 + y, 110 + x, 10 + y, 80 + x, 100 + y); //triangle 3 front shadow
  triangle(120 + x, 100 + y, 150 + x, 50 + y, 130 + x, 100 + y); //triangle 4 front shadow
  triangle(130 + x, 100 + y, 170 + x, 40 + y, 150 + x, 100 + y); //triangle 5 front shadow





  
  //moving this out the way for now - come back when you need to add clouds
//clouds
  //fill(255, 255, 255); //white colour
  //noStroke(); 
  //ellipse(90, 50, 40, 30); //cloud 1
  //ellipse(70, 50, 30, 20); //cloud 2
  //ellipse(80, 60, 30, 20); //cloud 3
  //ellipse(110, 40, 30, 20); //cloud 4
  //ellipse(110, 50, 40, 30); //cloud 5


  //ellipse(50, 40, 40, 30); //cloud 1
  //ellipse(30, 40, 30, 20); //cloud 2
  //ellipse(40, 50, 30, 20); //cloud 3
  //ellipse(70, 30, 30, 20); //cloud 4
  //ellipse(70, 40, 40, 30); //cloud 5

  
}

