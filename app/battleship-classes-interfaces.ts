module BattleshipGame {

  export interface ILocation {
    occupied: boolean;
    x: number;
    y: number;
  }

  export class Location implements ILocation {
    occupied: boolean = false;
    constructor(public x: number, public y: number) {}
  }

  export interface IBoard {
    locations: Location[];
    find(x: number, y: number); // left off return typing cuz returns either Location or false
  }

  export class Board implements IBoard {
    locations: Location[] = [];
    constructor(size: number) {
      for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
          this.locations.push(new Location(x, y));
        }
      }
    }
    find(x: number, y: number) {
      for (let locn of this.locations) {
        if (locn.x === x && locn.y === y) {
          return locn;
        }
      }
      // return false;
    }
  }

  export interface IShip {
    size: number;
    locations: Location[];
    setPeg(locn: Location): boolean;
  }

  export class Ship implements IShip {
    locations: Location[] = [];
    constructor(public size: number) {}
    setPeg(locn: Location) {
      if(locn.occupied) {
        return false;
      }
      if (this.locations.length === 0) { // first setting of peg for this ship
        this.locations.push(locn);
        locn.occupied = true;
        return true;
      } else { // continuing to place ship -- FIX SO CAN'T HAVE TURNS IN SHIPS
        let previousLocation = this.locations[this.locations.length - 1];
        if (locn.x === previousLocation.x + 1 || locn.y === previousLocation.y + 1) {
          this.locations.push(locn);
          locn.occupied = true;
          return true;
        } else {
          return false;
        }
      }


    }
  }





  export interface IGame {
    ships: Ship[];
  }

  export class Game implements IGame {
    ships: Ship[];
  }

}