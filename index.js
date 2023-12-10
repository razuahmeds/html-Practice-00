const arr1 = ["a", "b", "c", "d", "e"];

const arr2 = ["b", "j", "k"];

const isSimiliar = () => {
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];

    for (const item2 of arr2) {
      if (item === item2) {
        return true;
        break;
      }
    }
  }
  return false;
};

console.log(isSimiliar());
