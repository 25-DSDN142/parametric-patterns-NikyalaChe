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
  fill(143, 133, 135); //dark grey colour
  triangle(10, 200, 60, 110, 120, 200); //triangle 2 back
  fill(61, 57, 58); //dark grey colour
  triangle(10, 200, 58, 115, 40, 200); //triangle 2 back shadow 

  fill(143, 133, 135); //dark grey colour
  triangle(0, 200, 30, 130, 60, 200); //triangle 1 back
  fill(61, 57, 58); //dark grey colour
  triangle(0, 200, 28, 135, 10, 200); //triangle 1 back shadow
  
  fill(143, 133, 135); //dark grey colour
  triangle(50, 200, 90, 90, 150, 200); //triangle 3 back
  triangle(70, 200, 130, 100, 180, 200); //triangle 4 back 

//mountainFront
triangle()
  
}

