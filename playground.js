const dailyTemperatures = (temps) => {
    const datesToProcess = new DateStack(); // creates a new array
    const result = Array(temps.length).fill(0); // fills result with an array of zeros equal to the length of temperature array

    let currentTemp, pastDateToProcess;
  
    for (let currentDate = 0; currentDate < temps.length; currentDate++) { // loops through the temps array 
      currentTemp = temps[currentDate]; // current temp is set to the element in each iteration
      while (datesToProcess.any() && temps[datesToProcess.last()] < currentTemp) { 
        pastDateToProcess = datesToProcess.pop();
        result[pastDateToProcess] = currentDate - pastDateToProcess; // 
      }
      datesToProcess.add(currentDate);
    }

  // datesToProcess = [0]
  // result[0] = 1 - 0
    
    return result;
  };
  
  
  // The DateStack is a normal stack with a helpful name
  // It could be substituted with any other well-behaved stack
  var DateStack = function () {
    this.stack = [];
  }
  
  DateStack.prototype.last = function () {
    return this.stack[this.stack.length - 1];
  }
  
  DateStack.prototype.add = function (value) {
    this.stack.push(value);
    return true;
  }
  
  DateStack.prototype.any = function () {
    return this.stack.length > 0;
  }
  
  DateStack.prototype.pop = function () {
    return this.any() ? this.stack.pop() : null;
  }

  console.log(dailyTemperatures([72, 76, 73 ]))