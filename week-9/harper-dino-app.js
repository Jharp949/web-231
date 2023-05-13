//Title: harper-dino-app.js
//Author: James Harper
//Date: 5/12/2023
//Description: Web 231 - Week 9 - Assignment 9.2

class Gigantosaurus {
  constructor(name) {
    this.name = name;
  }
  roar() {
    return console.log(`${this.name} says: rooooooar`);
  }
}

const gig = new Gigantosaurus('Gigantosaurus');
console.log(gig.roar());

class Tyrannosaurus extends Gigantosaurus {
  constructor(name) {
    super(name);
    this.name = name;
  }
  growl() {
    return console.log(`${this.name} says: groooooowl`);
  }
}

const tyr = new Tyrannosaurus('Tyrannosaurus');
console.log(tyr.growl());

class Velociraptor extends Tyrannosaurus {
  constructor(name) {
    super(name);
    this.name = name;
  }
  awk() {
    return console.log(`${this.name} says: awk awk awwwwwwk`);
  }
}

const vel = new Velociraptor('Velociraptor');
console.log(vel.awk());
