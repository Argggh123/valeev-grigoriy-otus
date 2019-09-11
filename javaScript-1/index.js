function calculate(indexNum) {
  if (typeof indexNum !== 'number') {
    return;
  }
  let sum = indexNum;

  function riseSum(riseNum) {
    if (riseNum) {
      sum += riseNum;

      return riseSum;
    }

    return sum;
  }

  riseSum.toString = function () {
    return sum;
  };

  return riseSum;
}

console.log(calculate(1)(3)(-7)(12)());
