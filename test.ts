
//this block of code finds number
function Fibonacci () {
  this.looping = function(n) {
      let a = 0, b = 1, f = 1;
      for(let i = 2; i <= n; i++) {
          f = a + b;
          a = b;
          b = f;
      }
      return f;
  };
}

//this block of code finds the sequence
let f = new Fibonacci();
let fibonacciSequence = "";
for(let i = 1; i <= 100; i++) {
  fibonacciSequence += f.looping(i) + " ";
}
console.log(fibonacciSequence);

// 1st (A) - a|0, b|1, f|1
// 1st (B) - a|1, b|1, f|1
// 1st (C) - a|1, b|1, f|1

// 2nd (A) - a|1, b|1, f|2
// 2nd (B) - a|1, b|1, f|2
// 2nd (C) - a|1, b|2, f|2

// 3rd (A) - a|1, b|2, f|3
// 3rd (B) - a|2, b|2, f|3
// 3rd (C) - a|2, b|3, f|3
