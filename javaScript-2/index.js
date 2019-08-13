const fn1 = () => {
  console.log('fn1');

  return Promise.resolve(5);
};

const fn2 = () => new Promise(resolve => {
  console.log('fn2');

  setTimeout(() => resolve(1.4), 1000);
});

const asyncFuncArr = [fn1(), fn2()];

function reduce(memo, val) {
  console.log(val);

  return memo * val;
}

function promiseReduce(asyncFuncArr, reduce, initVal) {
  return Promise.all(asyncFuncArr).then((val) => val.reduce(reduce, initVal))
}

promiseReduce(asyncFuncArr, reduce, 1).then((sum) => {
  console.log('success', sum);
});
