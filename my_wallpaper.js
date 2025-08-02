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
 
  
}
 
function draw() {

  fill(245, 125, 125);
  ellipse(50, 70, 60, 20); 


}
