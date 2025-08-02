//your parameter variables go here!



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
    
  //mountainBack 
  fill(143, 133, 135); //light grey colour
  noStroke();
  triangle(0, 200, 30, 130, 60, 200); //triangle 1 back
  triangle(10, 200, 60, 110, 120, 200); //triangle 2 back
  triangle(50, 200, 90, 90, 150, 200); //triangle 3 back 
  triangle(70, 200, 130, 100, 180, 200); //triangle 4 back 
  
  //mountainbackShadow
  fill(61, 57, 58); //dark grey colour
  noStroke();
  triangle(0, 200, 30, 130, 10, 200); //triangle 1 back shadow
  triangle(10, 200, 60, 110, 40, 200); //triangle 2 back shadow 
  triangle(50, 200, 90, 90, 70, 200); //triangle 3 back shadow
  triangle(70, 200, 130, 100, 110, 200); //triangle 4 back shadow
  
//mountainFront
  fill(127, 140, 104); //green colour
  noStroke();
  triangle(5, 200, 30, 150, 50, 200); //triangle 1 front
  triangle(30, 200, 60, 130, 100, 200); //triangle 2 front
  triangle(60, 200, 110, 110, 150, 200); //triangle 3 front
  triangle(120, 200, 150, 150, 170, 200); //triangle 4 front
  triangle(130, 200, 170, 140, 200, 200); //triangle 5 front

//mountainFrontShadow
  fill(85, 92, 72); //dark green colour
  noStroke();
  triangle(5, 200, 30, 150, 20, 200); //triangle 1 front shadow
  triangle(30, 200, 60, 130, 40, 200); //triangle 2 front shadow
  triangle(60, 200, 110, 110, 80, 200); //triangle 3 front shadow
  triangle(120, 200, 150, 150, 130, 200); //triangle 4 front shadow
  triangle(130, 200, 170, 140, 150, 200); //triangle 5 front shadow





  
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

