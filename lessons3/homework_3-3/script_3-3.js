var n

var myArray = []

for (var i = 1; i < 101; i++) {
 
  n = "";
 
  if (i%3 == 0 && i%5 == 0) {
	  
    n = n + "FizzBuzz";
	
  } 
  
  else if (i%3 == 0) {
	  
    n = n + "Fizz";
	
  } 
  
  else if (i%5 == 0) {
	  
    n = n + "Buzz";
	
  }
  
  myArray.push(n || i);
  
}

console.log(myArray)