// constructor = special method for defiing the properties
// and methods of objects

function Car(make, model, year, color) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color
  this.drive = function() { console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Explorer", 2014, "black")
const car2 = new Car("Chevorlet", "Camaro", 2025, "blue")
const car3 = new Car("Dodge", "Charger", 2026, "silver")

car1.drive()
car2.drive()
car3.drive()