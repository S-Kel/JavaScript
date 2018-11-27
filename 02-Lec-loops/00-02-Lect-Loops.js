console.log('9 x Timetable');
console.log('-------------');

for (let i = 1; i <= 12; i++) {
    console.log(`${i} x 9 = ${i * 9}`);
}

for (let i = 1; i <= 12; i++) {
    for (let j = 0; j <= 12; j++)
        console.log(`${i} x ${j} = ${i * j}`);
    console.log("-----------");
}