export const ZONES = ['bow', 'deck', 'stern', 'port', 'starboard'];

export const SHIPS = [
  { id: 'frigate', 
    name: 'Frigate "Tempest"', 
    description: 'All-rounder — balanced in everything, good for a beginner',
    img: 'assets/ships/frigate.png',
    profile: { attacks: 1, defends: 2, damage: 20, hp: 100 } },

  { id: 'battleship', 
    name: 'Battleship "Bastion"', 
    description: 'Tank — nearly impossible to crack, but strikes rarely',
    img: 'assets/ships/battleship.png',
    profile: { attacks: 1, defends: 3, damage: 25, hp: 150 } },

  { id: 'submarine', 
    name: 'Submarine "Moray"', 
    description: 'Glass cannon — stings twice, dies fast',
    img: 'assets/ships/submarine.png',
    profile: { attacks: 2, defends: 1, damage: 18, hp: 60 } },

  { id: 'corvette', 
    name: 'Corvette "Swift"', 
    description: 'Speedster — slippery, mosquito-grade damage',
    img: 'assets/ships/corvette.png',
    profile: { attacks: 2, defends: 2, damage: 12, hp: 70 } },

  { id: 'fireship', 
    name: 'Fireship "Torch"', 
    description: 'Berserker — sprays three zones, forgets to defend',
    img: 'assets/ships/fireship.png',
    profile: { attacks: 3, defends: 1, damage: 10, hp: 90 } },

  { id: 'galleon', 
    name: 'Galleon "Chimera"', 
    description: 'Heavy caliber — one salvo, but what a salvo', 
    img: 'assets/ships/galleon.png',
    profile: { attacks: 1, defends: 1, damage: 30, hp: 95 } },
];

console.table(SHIPS.map(s => s.profile));