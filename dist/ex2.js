"use strict";
class Vehicle {
    constructor(name, id) {
        this.name = name;
        this.speed = 0;
        this.id = id;
    }
    slowDown() {
        if (this.speed > 0) {
            this.speed -= 5;
        }
    }
    speedUp() {
        this.speed += 10;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của ${this.name} (ID: ${this.id}): ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, id, gear) {
        super(name, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Thông tin xe đạp: Tên - ${this.name}, ID - ${this.id}, Tốc độ - ${this.speed} km/h, Số bánh răng - ${this.gear}`);
    }
}
const myBicycle = new Bicycle("Mountain Bike", "B001", 21);
myBicycle.speedUp();
myBicycle.showSpeed();
myBicycle.speedUp();
myBicycle.showSpeed();
myBicycle.slowDown();
myBicycle.showSpeed();
myBicycle.showInfo();
