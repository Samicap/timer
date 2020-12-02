// process.stdout.write('\x07'); //makes beep noise
const beep = function() {
  process.stdout.write('\x07');
  console.log("beep \n");
};

const timer = function(delay) {
  delay = Number(delay);
  
  if (delay < 0 || delay === "" || isNaN(delay)) {
    console.log("error");
    return;
  }
  let secondsTillBeep = (delay * 1000);
  setTimeout(beep, secondsTillBeep);
};

const args = process.argv.slice(2);
for (let num of args) {
  timer(num);
}