module.exports = function getZerosCount(number) {
  let count = 0;
  function check(number){
    if (number % 5 === 0)
    { count++;
      check(number / 5);
     };
  }
  for(let i = 1; i <= number; i++){
    check(i);
  };
  console.log(count);
  return count;
};
