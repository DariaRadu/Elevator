const assert = require('assert');
const Elevator = require('../elevator');

describe('Elevator', () => {
  const elevator = new Elevator(0, 10);
  describe('direction', () => {
    it('should be -1 when the elevator goes to floor 4 from floor 3', () => {
      elevator.currentFloor = 4;
      elevator.changeDirection(3);
      assert.equal(elevator.direction, -1);
    });

    it('should be 1 when the elevator goes to floor 4 from floor 5', () => {
      elevator.currentFloor = 4;
      elevator.changeDirection(5);
      assert.equal(elevator.direction, 1);
    });

    it('should be -1 when the elevator reaches the maximum floor number', () => {
      elevator.maxFloor = 10;
      elevator.currentFloor = 10;
      elevator.checkIfMinOrMaxFloor();
      assert.equal(elevator.direction, -1);
    });

    it('should be -1 when the elevator is at the minimum floor number', () => {
      elevator.minFloor = 0;
      elevator.currentFloor = 0;
      elevator.checkIfMinOrMaxFloor();
      assert.equal(elevator.direction, 1);
    });
  });

  describe('floors queue', () => {
    it('should be sorted as 6, 2, 1 if current floor number is 4', () => {
      elevator.currentFloor = 4;
      elevator.floorsQueue = [1, 2, 6]
      elevator.sortFloorsQueue()
      assert.deepEqual(elevator.floorsQueue, [6,2,1]);
    });

    it('should be sorted as 6, 3, 2, 1 if current floor number is 4 and floor number 3 is added later', () => {
      elevator.currentFloor = 4;
      elevator.floorsQueue = [1, 2, 6];
      elevator.sortFloorsQueue();

      elevator.addNewFloor(3);

      assert.deepEqual(elevator.floorsQueue, [6,3,2,1]);
    });
  });

  describe('add new floor', () => {
    
  });
});