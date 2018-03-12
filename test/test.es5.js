var Car = require('../index.es5.js').Car;
var expect = require("chai").expect;

describe("Car Constructor", function() {
  before(function() {
    this.car = new Car();
  });
  after(function() {
    delete this.car;
  });
  it("should have 4 wheels", function() {
    expect(this.car.getWheels()).to.equal(4);
  });
  it("should have positive fuel", function() {
    expect(this.car.getFuel()).to.equal(16);
  });
  it("should throw Error if getColor is called without being set", function() {
    expect(this.car.getColor).to.throw(Error);
  });
  it("should return a color if set", function() {
    var color = "Red";
    this.car.setColor("Red");
    expect(this.car.getColor()).to.be.a("string");
    expect(this.car.getColor()).to.equal(color);
  });
});