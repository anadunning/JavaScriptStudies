// Basic Array Operations (Methods)

const friends = ['Michael', 'Bob', 'Peter'];

// Add elements into the array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements from the array
friends.pop(); // Removes the last element
const popped = friends.pop();
console.log(friends);

friends.shift(); // Removes the first element
console.log(friends);

console.log(friends.indexOf('Bob'));
console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Bob'));
console.log(friends.includes('Steven'));
console.log(friends.includes('23')); // It doesn't do type coercion.
console.log(friends.includes(23));

if (friends.includes('Bob')) {
    console.log('You have a friend called Bob.');
}