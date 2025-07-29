//your parameter variables go here!
let legsHeight = 40;
let legsWidth  = 20;

let legFill_Width = 15
let legFill_Height = 30

let crabbyX = 20; //x position of the crabby
let crabbyY = 30; //y position of the crabby


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


  
}
  