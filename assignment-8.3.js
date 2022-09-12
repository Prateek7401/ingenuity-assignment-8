alert("Ques 3 : Write a code in JavaScript to Check all Students passed ");
  // let string = prompt("Enter any string with extra spaces");
  let size = prompt("Enter the size of array");
  let res = [];
  let sum = 0;
  while (size-- > 0) {
    var num = Number(prompt("Enter number"));
    checkNum(num);
    sum = sum + num;
  }

  function checkNum(num) {
    while (!/^[0-9]+$/.test(num)) {
    
