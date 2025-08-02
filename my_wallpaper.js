//your parameter variables go here!
let mountainBackColour = [143, 133, 135]; //light grey colour
let mountainFrontColour = [127, 140, 104]; //green colour

let mountainStart = 100;  //position of the front and back mountains
let mountainFinish = 100; //position of the front and back mountains


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



  //mountains 

  //mountainBack 
  fill(143, 133, 135); //light grey colour
  noStroke();
  triangle(0, mountainStart, 30, 30, 60, mountainFinish); //triangle 1 back
  triangle(10, mountainStart, 60, 10, 120, mountainFinish); //triangle 2 back
  triangle(50, mountainStart, 90, 10, 150, mountainFinish); //triangle 3 back 
  triangle(70, mountainStart, 130, 20, 180, mountainFinish); //triangle 4 back 
  
  //mountainbackShadow
  fill(61, 57, 58); //dark grey colour
  noStroke();
  triangle(0, 100, 30, 30, 10, 100); //triangle 1 back shadow
  triangle(10, 100, 60, 10, 40, 100); //triangle 2 back shadow 
  triangle(50, 100, 90, 10, 70, 100); //triangle 3 back shadow
  triangle(70, 100, 130, 20, 110, 100); //triangle 4 back shadow
  
//mountainFront
  fill(127, 140, 104); //green colour
  noStroke();
  triangle(5, mountainStart, 30, 50, 50, mountainFinish); //triangle 1 front
  triangle(30, mountainStart, 60, 30, 100, mountainFinish); //triangle 2 front
  triangle(60, mountainStart, 110, 10, 150, mountainFinish); //triangle 3 front
  triangle(120, mountainStart, 150, 50, 170, mountainFinish); //triangle 4 front
  triangle(130, mountainStart, 170, 40, 200, mountainFinish); //triangle 5 front

//mountainFrontShadow
  fill(85, 92, 72); //dark green colour
  noStroke();
  triangle(5, 100, 30, 50, 20, 100); //triangle 1 front shadow
  triangle(30, 100, 60, 30, 40, 100); //triangle 2 front shadow
  triangle(60, 100, 110, 10, 80, 100); //triangle 3 front shadow
  triangle(120, 100, 150, 50, 130, 100); //triangle 4 front shadow
  triangle(130, 100, 170, 40, 150, 100); //triangle 5 front shadow





  
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

