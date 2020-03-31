const io = require('console-read-write');

module.exports = class Elevator {
    constructor(minFloor, maxFloor) {
        this.maxFloor = maxFloor;
        this.minFloor = minFloor;
        this.direction = 1;
        this.currentFloor = 4;
        this.floorsQueue = [];
    }

    async goToFloor (floor) {
        this.changeDirection(floor);
        io.write(`Currently at floor: ${this.currentFloor}`);

        while (this.currentFloor != floor) {
            this.currentFloor = this.currentFloor + this.direction;
            io.write(`Currently at floor: ${this.currentFloor}`);
        }

        this.checkIfMinOrMaxFloor();
        io.write(`You have arrived at floor: ${this.currentFloor}`);
        
        this.floorsQueue.shift();
        const newPerson = await io.ask('Is there a new person entering the elevator? (yes/no)');
        if (newPerson === 'yes') {
            const newFloorNumber = parseInt(await io.ask('What floor is the new person going to?'));
            this.addNewFloor(newFloorNumber);
        }
    }

    async goToFloors(floors) {
        this.floorsQueue = floors;
        this.sortFloorsQueue();
        while (this.floorsQueue.length) {
            await this.goToFloor(this.floorsQueue[0]);
        }
        io.write('Your elevator journey is done!');
    }

    sortFloorsQueue() {
        let uniqueFloors = [...new Set(this.floorsQueue)];

        uniqueFloors = uniqueFloors.filter(floor => floor <= this.maxFloor && floor >= this.minFloor);

        const floorsUnderCurrentFloor = uniqueFloors.filter((floor) => floor <= this.currentFloor).sort().reverse();
        const floorsAboveCurrentFloor = uniqueFloors.filter((floor) => floor > this.currentFloor).sort();

        if (this.direction  === 1) this.floorsQueue = [...floorsAboveCurrentFloor, ...floorsUnderCurrentFloor];
        else this.floorsQueue = [...floorsUnderCurrentFloor, ...floorsAboveCurrentFloor];
    }

    addNewFloor(newFloorNumber) {
        this.floorsQueue.push(newFloorNumber);
        this.sortFloorsQueue();
    }

    changeDirection(floor) {
        if (floor > this.currentFloor) this.direction = 1;
        else this.direction = -1;
    }

    checkIfMinOrMaxFloor() {
        if (this.currentFloor === this.minFloor) this.direction = 1;
        if (this.currentFloor === this.maxFloor) this.direction = -1;
    }
}