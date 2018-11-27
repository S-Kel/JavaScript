let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
    'Blue', 'Indigo', 'Violet'
];

// Iterations using for of Object - returns item
for (let color of rainbowColors) {
    console.log(`${color}`);
}

// Iterations using for in Object - returns index
for (let colorIndex in rainbowColors) {
    console.log(`${colorIndex} ${rainbowColors[colorIndex]}`);
}