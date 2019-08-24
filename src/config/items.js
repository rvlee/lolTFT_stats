export const baseItem = {
  1: {
    id: 1,
    name: 'B.F. Sword',
    description: 'Desc',
    logo: {
      alt: 'bf sword',
      src: 'http://localhost:3000/item/bfsword.png',
    },
    combinations: [9, 10, 11, 12, 13, 14, 15, 16],
  },
  2: {
    id: 2,
    name: 'Chain Vest',
    description: 'Desc',
    logo: {
      alt: 'chain vest',
      src: 'http://localhost:3000/item/chainvest.png',
    },
    combinations: [10],
  },
  3: {
    id: 3,
    name: 'Giants Belt',
    description: 'Desc',
    logo: {
      alt: 'giants belt',
      src: 'http://localhost:3000/item/giantsbelt.png',
    },
    combinations: [15],
  },
  4: {
    id: 4,
    name: 'Needlessly Large Rod',
    description: 'Desc',
    logo: {
      alt: 'needlessly large rod',
      src: 'http://localhost:3000/item/needlesslylargerod.png',
    },
    combinations: [11],
  },
  5: {
    id: 5,
    name: 'Negatron Cloak',
    description: 'Desc',
    logo: {
      alt: 'negatron cloak',
      src: 'http://localhost:3000/item/negatroncloak.png',
    },
    combinations: [9],
  },
  6: {
    id: 6,
    name: 'Recursive Bow',
    description: 'Desc',
    logo: {
      alt: 'recursive bow',
      src: 'http://localhost:3000/item/recursivebow.png',
    },
    combinations: [14],
  },
  7: {
    id: 7,
    name: 'Spatula',
    description: 'Desc',
    logo: {
      alt: 'spatula',
      src: 'http://localhost:3000/item/spatula.png',
    },
    combinations: [16],
  },
  8: {
    id: 8,
    name: 'Tear of the Goddess',
    description: 'Desc',
    logo: {
      alt: 'tear of the goddess',
      src: 'http://localhost:3000/item/tearofthegoddess.png',
    },
    combinations: [13],
  },
};

export const items = {
  ...baseItem,
  9: {
    id: 9,
    name: 'Blood Thirster',
    description: 'Attacks heal for 50% of damage.',
    logo: {
      alt: 'blood thirster',
      src: 'http://localhost:3000/item/bloodthirster.png',
    },
    base: [1, 5],
  },
  10: {
    id: 10,
    name: 'Guardian Angel',
    description: 'Wearer revives with 1000 Health after 2 second delay.',
    logo: {
      alt: 'guardian angel',
      src: 'http://localhost:3000/item/guardianangel.png',
    },
    base: [1, 2],
  },
  11: {
    id: 11,
    name: 'Hextech Gunblade',
    description: 'Heal for 25% of all damage dealt.',
    logo: {
      alt: 'hextech gunblade',
      src: 'http://localhost:3000/item/hextechgunblade.png',
    },
    base: [1, 4],
  },
  12: {
    id: 12,
    name: 'Infinity Edge',
    description: 'Critical Strikes deal +100% damage.',
    logo: {
      alt: 'infinity edge',
      src: 'http://localhost:3000/item/infinityedge.png',
    },
    base: [1, 1],
  },
  13: {
    id: 13,
    name: 'Spear of Shojin',
    description: 'After casting, wearer gains 20% of its max mana per attack.',
    logo: {
      alt: 'spear of shojin',
      src: 'http://localhost:3000/item/spearofshojin.png',
    },
    base: [1, 8],
  },
  14: {
    id: 14,
    name: 'Sword of the Divine',
    description: 'Each second, the wearer has a 5% chance to gain 100% Critical Strike.',
    logo: {
      alt: 'sword of the divine',
      src: 'http://localhost:3000/item/swordofthedivine.png',
    },
    base: [1, 6],
  },
  15: {
    id: 15,
    name: "Zeke's Herald",
    description: 'Adjacent allies gain +12.5% Attack Speed.',
    logo: {
      alt: 'zekes herald',
      src: 'http://localhost:3000/item/zekesherald.png',
    },
    base: [1, 3],
  },
  16: {
    id: 16,
    name: 'Youmuus Ghostblade',
    description: 'Wearer is also an Assassin.',
    logo: {
      alt: 'youmuus ghostblade',
      src: 'http://localhost:3000/item/youmuusghostblade.png',
    },
    base: [1, 7],
  },
};
