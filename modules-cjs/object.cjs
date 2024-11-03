function clone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = clone(obj[key]);
    }
  }
  return copy;
}
function merge(obj1, obj2) {
  const merged = { ...obj1 };
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      merged[key] = obj2[key];
    }
  }
  return merged;
}
function pick(obj, keys) {
  const picked = {};
  for (const key of keys) {
    if (obj.hasOwnProperty(key)) {
      picked[key] = obj[key];
    }
  }
  return picked;
}
function omit(obj, keys) {
  const omitted = { ...obj };
  for (const key of keys) {
    delete omitted[key];
  }
  return omitted;
}
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

module.exports = {
    clone,
    merge,
    pick,
    omit,
    isEmpty
}