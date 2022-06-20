function plusMinus(arr) {
  // Initialize total array element
  let counter = 0;

  // initializing array element categories
  let positiveInteger = 0;
  let negativeInteger = 0;
  let zeroInteger = 0;

  arr.forEach((arrElement) => {
    // Calculates total number of array elements
    counter += 1;
    // Check if arrElement is > 0
    if (arrElement > 0) {
      positiveInteger += 1;
    }
    // check if arrElement < 0
    if (arrElement < 0) {
      negativeInteger += 1;
    }
    // check if arrElement = 0
    if (arrElement === 0) {
      zeroInteger += 1;
    }
  });

  //   calculate the various ratios for each category
  let positiveRatio = positiveInteger / counter;
  let negativeRatio = negativeInteger / counter;
  let zeroRatio = zeroInteger / counter;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
