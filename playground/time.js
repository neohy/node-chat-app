const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var date = moment();
console.log(date.format('YY'));
console.log(date.format('YYYY'));
console.log(date.format('MMM'));
console.log(date.format('MMMM'));
console.log(date.format('D'));
console.log(date.format('DD'));
console.log(date.format('Do'))
console.log(date.format('d'));
console.log(date.format('dd'));
console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));
