//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

// This will extend the vehicle class with a subclass
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers=5;
    this.passenger=0;
    this.numberOfWheels =4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService=false;    
    }
    loadPassenger(num){
        if ((num+this.passenger) < this.maximumPassengers){
            let availableRoom = this.maximumPassengers - this.passenger;
            return availableRoom;
        }else {
            console.log('The ' + this.model + ' '+ this.make + 'does not have enough room' )
        }

    }
    start(){
        if(this.fuel > 0){
            console.log("Car has enough gas to start.");
            return this.started =true;
        }else {
            console.log('Please add fuel to start the car');
            return this.started=false;
        }
       }
       scheduleService(mileage){
            if(mileage> 30000){
                console.log('Please take car in for scheduled maintenance');
               return  this.scheduleService = true;
            } else {
                console.log ('No scheduled maintenance required at this time');
                return this.scheduleService =false;
            }
        
       }
}


//this shows how to call from this module...
let v = new VehicleModule("Mecury", "A28 Sedan", "1965", "Black", "20000")
console.log(v.make)

v.loadPassenger(6);
