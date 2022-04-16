/* Ex1.1 - Yes or No
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
string for false. */

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
