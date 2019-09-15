
let volcano = {
  gridChars:
    [['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'f', ],
      ['m', 'A', 'm', 'm', 'm', 'm', 'm', 'l', 'l', 'l', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'm', 'm', 'm', 'l', 'l', 'l', 'l', 'l', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'm', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'l', 'l', 'l', 'l', 'l', 'm', 's', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 's', 's', 's', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'l', 'l', 'l', 'l', 'm', 'm', 's', 's', 's', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 's', 's', 's', 's', 'm', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'l', 'l', 'l', 'l', 'l', 'm', 'm', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'm', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'l', 'l', 'l', 'l', 'l', 'm', 'm', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 's', 's', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'm', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'l', 'l', 'l', 'm', 'm', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'r', 's', 's', 's', 's', 'l', 'l', 'l', 'm', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 's', 's', 'm', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 's', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'r', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'm', 'm', 'm', 's', 's', 's', 's', 's', 'f', 'f', 'f', 'r', 'r', 'r', 'r', 'r', 'r', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'r', 'r', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['m', 'm', 'm', 'm', 's', 's', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'r', 'r', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', 'B', 'f', 'f', ],
      ['s', 's', 's', 's', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'r', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['s', 's', 's', 's', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'r', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['s', 's', 's', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'g', 'g', 'g', 'g', 'g', 'p', 'p', 'w', 'w', 'w', 'w', 'g', 'g', 'r', 'r', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['s', 's', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'r', 'r', 'r', 'r', 'p', 'p', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['s', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'r', 'g', 'g', 'g', 'g', 'g', 'p', 'p', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'p', 'p', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'r', 'r', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'f', ],
      ['f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'g', 'g', 'r', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f', ],
    ],
  colorCodes: {
    'w': '#38449a',
    'p': '#f1c661',
    'l': '#ff7830',
    'm': '#67665f',
    's': '#999999',
    'f': '#136227',
    'g': '#6ec54c',
    'r': '#835934',
    'B': '#00ff00',
    'A': '#ff0000'},
  charCosts: {'w': 100, 'm': 50, 'f': 10, 'g': 5, 'r': 1, 'A': 1, 'B': 1, 'p': 8, 's': 25},
  impassableChars: ['l']
};
