const yesOrNo = (value) => {
  let answer = value ? true : false;
  return answer;
};

//testing:
console.log(yesOrNo({})); //true
console.log(yesOrNo(undefined)); //false
console.log(yesOrNo(1 > 5)); //false
console.log(yesOrNo("hello")); //true
console.log(yesOrNo(5)); //true
console.log(yesOrNo(0)); //true
