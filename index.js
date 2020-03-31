const io = require('console-read-write');
const Elevator = require('./elevator');

const elevator = new Elevator(0, 10);
let floors = [];
let numberOfPeople = 0;

promptQuestion = async () => {

    floors = [];
    numberOfPeople = parseInt(await io.ask(`How many people are entering?`));
    for(let i = 0; i < numberOfPeople; i++) {
        floors.push(parseInt(await io.ask(`What floor is person ${i+1} going to?`)))
    }
    
    await elevator.goToFloors(floors);
}

promptQuestion();
