// While Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++;
}

// The while loop does not depend on a counter. See below. Random numbers
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}