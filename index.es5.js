var Car = function() {
  var wheels = 4,
    fuel = 16;
  this.color;
  this.getWheels = function() {
    return wheels;
  };
  this.getFuel = function() {
    return fuel;
  };
  this.getColor = function() {
    if (!this.color) {
      throw new Error("Color has not been set yet");
    }
    return this.color;
  };
  this.setColor = function(color) {
    if (['Red', 'Green', 'Blue'].indexOf(color) == 0) {
      this.color = color;
    }
    else {
      throw new Error("I am very picky about my car colors." +
        "Please pass in either Red, Green or Blue");
    }
  }
};

module.exports = {
  Car: Car
}