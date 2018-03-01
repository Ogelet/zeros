module.exports = function getZerosCount(number) {
  let count = 0;
  for(let i = 1; i <= number; i++){
    if (i % 5 === 0)
    { count++;
      let a = i;
      while((a/5) % 5 === 0){
        count++;
        a = a / 5;
      };
     };
  };
  return count;
};
