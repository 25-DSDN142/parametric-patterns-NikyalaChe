//your parameter variables go here!
let legsHeight = 40;
let legsWidth  = 20;

let legFill_Width = 15
let legFill_Height = 30

let crabbyX = 20; //x position of the crabby
let crabbyY = 30; //y position of the crabby


function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(153, 232, 244); //light blue sky colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  Crabby(); 
  
}
 
function Crabby(){

  push();
  translate(crabbyX, crabbyY);
 

//legs
  fill(240, 36, 128);
  stroke(240, 36, 128);
  ellipse(60, 120, legsWidth, legsHeight);
  ellipse(60, 120, legsWidth, legsHeight);
  ellipse(140, 120, legsWidth, legsHeight);
  ellipse(75, 120, legsWidth, legsHeight);
  ellipse(125, 120, legsWidth, legsHeight);
//legFill
  fill(237, 197, 152);
  stroke(237, 197, 152);
  ellipse(60, 120, legFill_Width, legFill_Height); 
  ellipse(140, 120, legFill_Width, legFill_Height);
  ellipse(75, 120, legFill_Width, legFill_Height);
  ellipse(125, 120, legFill_Width, legFill_Height);
//arms
  fill(240, 36, 128);
  stroke(240, 36, 128); 
  ellipse(60, 90, 35, 15); //bottom of arm
  ellipse(140, 90, 35, 15); //bottom of arm
  ellipse(48, 82, 15, 24); //topleft arm
  ellipse(152, 82, 15, 24); //topright arm
  circle(50, 70, 20, 10); //left claw
  circle(150, 70, 20, 10); //right claw
//claw
  fill(153, 232, 244);
  stroke(153, 232, 244);
  triangle(45, 75, 50, 60, 70, 60);
  triangle(150, 75, 160, 40, 140, 60);
//armsFill
  fill(237, 197, 152);
  stroke(237, 197, 152);
  ellipse(60, 90, 30, 10); //bottom of arm
  ellipse(140, 90, 30, 10); //bottom of arm
  ellipse(48, 82, 10, 20); //top arm
  ellipse(152, 82, 10, 20); //top arm
//face
  fill(240, 36, 128);
  stroke(240, 36, 128);
  ellipse(100, 100, 70, 70);
//eyes
  fill(28, 28, 27);
  circle(80, 70, 20, 20); //lefteye
  circle(120, 70, 20, 20); //righteye

  pop();


}
