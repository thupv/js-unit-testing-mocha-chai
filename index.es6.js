export class Car {
  constructor(){
    this.wheels = 4;
    this.fuel = 16;
  }
  getWheels(){
    return this.wheels;
  }
  getFuel(){
    return this.fuel;
  }
  getColor(){
    return this.color;
  }
  setColor(color) {
    if (['Red', 'Green', 'Blue'].indexOf(color) == 0) {
      this.color = color;
    }
    else {
      throw new Error("I am very picky about my car colors." +
        "Please pass in either Red, Green or Blue");
    }
  }
}
