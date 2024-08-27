export const findPairs = (array, target) => {
  let result = [];
  
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === parseInt(target)) {
        result.push([array[i], array[j]]);
      }
    }
  }
  return result;
};
