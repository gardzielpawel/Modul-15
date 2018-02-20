
//  1
      
const hello = "Hello",
      world = "World";
const sayHello = console.log(`${hello} ${world}`);


// 2

let multiply = (a, b=1) => {return a * b};
console.log(multiply(5));


//3
const average = (...args) => {
    var sum = args.reduce((x, y) => x + y, 0);
      return sum / args.length;
  }
console.log (average(1)); 
console.log (average(1, 3)); 
console.log (average(1, 3, 6, 6)); 

//4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average(...grades));

// 5

const names = [1, 4, 'Iwona', false, 'Nowak']
const [, , third, ,fifth] = names;
console.log(third, fifth);