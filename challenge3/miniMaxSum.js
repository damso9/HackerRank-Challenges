
const miniMaxSum = (inputArray) => {
  let summedUpArrays = [];
  let addedArray = [];

  // This iteration get four number out of every five integer array element
  for (let i = 0; i <= inputArray.length - 1; i++) {
    let myArray2 = [...inputArray];
    myArray2.splice(i, 1);
    summedUpArrays.push(myArray2);
  }
  //   console.log(summedUpArrays)

  // This iteration loops over each array element stored in summedUpArrays and performs
  // Reduce operation to get the total of each iteration
  for (let i = 0; i < summedUpArrays.length; i++) {
    // console.log(summedUpArrays[i])
    let added = summedUpArrays[i].reduce((accumulator, currentValue) => {
      // console.log(accumulator, currentValue)
      return accumulator + currentValue;
    }, 0);
    addedArray.push(added);
  }

  // console.log(addedArray)
// Sort function sorts its from the least to the most
  addedArray.sort(function (a, b) {
    return a - b;
  });
  console.log(`${addedArray[0]} ${addedArray[addedArray.length - 1]}`); 
};

miniMaxSum([1, 2, 3, 4, 5]);
