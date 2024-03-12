function calculateArea(shape, arg1, arg2) {
    if (shape === 'rectangle') {
      return arg1 * arg2;
    } else if (shape === 'circle') {
      return Math.PI * Math.pow(arg1, 2);
    } else {
      throw new Error('Unsupported shape');
    }
  }
  
  console.log(calculateArea('rectangle', 5, 3)); // Outputs: 15 (Area of rectangle)
  console.log(calculateArea('circle', 4));      // Outputs: 50.26548245743669 (Area of circle)