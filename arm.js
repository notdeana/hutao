class Arm {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }
  
  display() {
    // left arm
  push()
  translate(this.xPos, this.yPos)
  rotate(this.rotation)
    scale(this.size)
  beginShape();
  vertex(width * .1, height * .37);
  vertex(width * .2, height * .38);
  vertex(width * .26, height * .5);
  vertex(width * .3, height * .63);
  vertex(width * .2, height * .6);
  vertex(width * .15, height * .58);
  vertex(width * .1, height * .5);
  vertex(width * .06, height * .49);
  vertex(width * .1, height * .37);
  endShape(CLOSE);
  pop()
    
  }
  
  
  move(){
    
    this.rotation++;
    
    if (this.yPos <= height * 1.3){
    this.yPos = this.yPos + 2;
    //shorthand is +=
    } else {
      this.yPos = -height * .3;
    }
  }
}

    
