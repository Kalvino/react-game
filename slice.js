const obj = {
  squares: Array(9).fill(null),
  name: ""
};
let slice = obj.name.slice();
console.log(typeof(slice));

var player = {score: 1, name: 'Jeff'};
var newPlayer1 = Object.assign({}, player, {score: 4})
var newPlayer = {...player, age:2};
console.log(newPlayer1);
console.log(player);

var array = [1, 2, 3, 3];

var set = new Set(array); // Will have [1, 2, 3]
console.log(set);

const kvArray = [['key1', 'value1'], ['key2', 'value2']];
const myMap = new Map(kvArray);
console.log(Array.from(myMap));
console.log(myMap);

console.log([... myMap]);
