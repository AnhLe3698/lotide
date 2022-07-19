const tail = function(array) {
  let holder = [];
  for (let i = 1; i < array.length; i++) {
    holder.push(array[i]);
  }
  return holder;
};

module.exports = tail;
