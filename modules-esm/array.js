function flatten(arr) {
  return arr.reduce((flat, item) => {
    if (Array.isArray(item)) {
      return flat.concat(flatten(item));
    } else {
      return flat.concat(item);
    }
  }, []);
}
function groupBy(arr, property) {
  return arr.reduce((groups, item) => {
    const groupKey = item[property];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1].filter(item => set2.has(item));
}
function difference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const diff1 = [...set1].filter(item => !set2.has(item));
  const diff2 = [...set2].filter(item => !set1.has(item));

  return [...diff1, ...diff2];
}
function union(arr1, arr2) {
  const set = new Set([...arr1, ...arr2]);
  return [...set];
}
function unique(arr) {
  return [...new Set(arr)];
}

export {
    flatten,
    groupBy,
    shuffle,
    intersection,
    difference,
    union,
    unique
}