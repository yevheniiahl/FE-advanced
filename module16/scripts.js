class Shape{
  constructor (){
    this.color;
    this.initX;
    this.initY;
  };
  getColor(){
    console.log(this.color);
  };
  setColor(val) {
    this.color = val;
  };
  getCoords(){
    console.log(`The coordinates X - ${this.initX} and coordinates Y - ${this.initY}`);
  };
  moveTo(newX, newY){
    this.initX = newX;
    this.initY = newY;
  };
}

class Rectangle extends Shape {
  constructor(){
    super();
    this.initWidth;
    this.initHeight;
  };
  setWidth(newWidth){
    this.initWidth = newWidth;
  };
  setHeight(newHeight){
    this.initHeight = newHeight;
  };
  getDims(){
    console.log(`Width - ${newWidth}, Height - ${newHeight}`);
  };
  draw(){
    console.log("Draw a Rectangle at:");
    console.log(`(x: ${this.initX}, y: ${this.initY})`);
    console.log("With dimentions:");
    console.log(`height: ${this.initHeight}`);
    console.log(`width: ${this.initWidth}`);
    console.log(`Filled with color: ${this.color}`);
  }
}
let rectangle = new Rectangle();

  rectangle.setColor('#009688');
  rectangle.moveTo(10, 10);
  rectangle.setWidth(100);
  rectangle.setHeight(100);
  rectangle.draw();


  class Circle extends Shape {
  constructor(){
    super();
    this.initRadius;
  };
  getRadius(){
    console.log(`The radius is ${initRadius}`);
  };
  setRadius(val){
    this.initRadius = val;
  };
  draw(){
    console.log("Draw a Circle at:");
    console.log(`(x: ${this.initX}, y: ${this.initY})`);
    console.log("With dimentions:");
    console.log(`radius: ${this.initRadius}`);
    console.log(`Filled with color: ${this.color}`);
  }
}
 let circle = new Circle();

 circle.setColor('#FF5722');
 circle.moveTo(50, 50);
 circle.setRadius(250);
 circle.draw();