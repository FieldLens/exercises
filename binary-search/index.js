function binsearch(ary, elem) {
  if (!ary || ary.length == 0) { return -1 }
  if (ary.length === 1 && ary[0] === elem) { return 0 } else { return -1 }

  var middle = ary.length / 2;
  if (elem < ary[middle]) {
    return binsearch(ary.splice(0, middle))
  } else {
    return binsearch(ary.splice(middle))
  }
};

module.exports = binsearch;
