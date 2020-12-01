// process.stdout.write('\x07'); //makes beep noise

const timer = function(delay) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
}

const args = process.argv;


//input node timer1.js 10 3 5 15 9 

// const sum = function(x, y) {
//   x = Number(x);
//   y = Number(y);
//   let sum = x + y;
//   return sum;
// };


// const args = process.argv;
// let s = sum(args[2], args[3]);
// console.log(s);
