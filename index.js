function forEach(iterable, callback) {
  // check if iterable is an array
  if (Array.isArray(iterable)) {
    // if it is iterate on each element in the array, and perform the callback function on it.
    for (let i = 0; i < iterable.length; i++) {
      const element = iterable[i];
      callback(element, i, iterable)
    }
    // check if it's an object(hash)
  } else if (typeof iterable === 'object') {
    // iterate on the object taking the value of each key and perform the callback function on it.
    for (const key in iterable) {
      const value = iterable[key];
      callback(value, key, iterable);
    }
  }
}
