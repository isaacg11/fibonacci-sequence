function Fibonacci() {
    this.looping = function (n) {
        var a = 0, b = 1, f = 1;
        for (var i = 2; i <= n; i++) {
            f = a + b;
            a = b;
            b = f;
        }
        return f;
    };
}
var f = new Fibonacci();
var fibonacciSequence = "";
for (var i = 1; i <= 100; i++) {
    fibonacciSequence += f.looping(i) + " ";
}
console.log(fibonacciSequence);
