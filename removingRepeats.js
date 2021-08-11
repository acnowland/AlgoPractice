function findDifferences(arrayA, arrayB) {
  arrayA = arrayA.sort(function (a, b) {
    return a - b;
  });

  arrayB = arrayB.sort(function (a, b) {
    return a - b;
  });

  let nonOverlap = [];

  let aIndex = 0;
  let bIndex = 0;

  if (arrayB.length === 0) {
    return arrayA;
  }

  // runs like a two pointer apprach  on different arrays
  while (aIndex < arrayA.length) {
    let aNum = arrayA[aIndex];
    let bNum = arrayB[bIndex];

    if (aNum === bNum) {
      aIndex++;
      if (bIndex === arrayB.length - 1) {
        continue;
      } else {
        bIndex++;
      }
    } else if (aNum < bNum) {
      nonOverlap.push(aNum);
      aIndex++;
    } else if (aNum > bNum) {
      console.log(bNum);
      if (bIndex === arrayB.length - 1) {
        nonOverlap.push(aNum);
        aIndex++;
      } else {
        bIndex++;
      }
    }
  }
  return nonOverlap;
}

let arrayA = [1, 2, 3, 4, 5, 6, 7];
let arrayB = [2, 3, 7, 10, 15, 67];

console.log(findDifferences(arrayA, arrayB));
