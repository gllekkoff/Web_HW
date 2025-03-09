function max(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

console.log(max([1, 2, 3, 4, 5])); // 5

function maxPair(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return null;

  let maxSum = -Infinity;
  let max = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    if (current + next > maxSum) {
      max[0] = current;
      max[1] = next;
      maxSum = current + next;
    }
  }
  return max;
}

console.log(maxPair([1, 2, 3, 4, 5])); // [4, 5]
console.log(maxPair([1, 2, 3, -4, 10])); // [-4, 10]

function recordProgress(object, tuple) {
  if (!Array.isArray(tuple) || tuple.length === 0) return null;

  const [ageChange, weightChange] = tuple;

  return {
    ...object,
    age: (object.age ?? 0) + ageChange,
    weight: (object.weight ?? 0) + weightChange,
  };
}

console.log(recordProgress({ name: "Mike", age: 13, weight: 100 }, [1, 20])); // { name: 'Mike', age: 14, weight: 120 }
