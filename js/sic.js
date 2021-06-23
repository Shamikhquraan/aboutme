'use strict';



var ask = function (y) {
  switch (y) {
    case 'yes':
      console.log('yes');
      return 1;
    case 'y':
      console.log('y')
      return 1;
    case 'no':
      console.log('no');
      return 0;
    case 'n':
      console.log('n');
      return 0;
    default:
      alert("wrong selected");
      return 10;
  }
  // func
};
var sum = 0;
alert("welcome friends in my first we have to chick on ur old :");

var age = parseInt(prompt("please input ur age as a number just !"));
if (age < 18)
  alert("we are sorry we can not welcomefor u , u are not adult ");
else if (age => 18) {
  alert("welcome for shamikh world champion here in my page .. ");
  alert("so u will have 5 qustion each i want u too awnser as much as u can the awnser will be (yes/no) or (y/N) ")
  let y = prompt("as u see u consider me above 24!").toLowerCase();
  if (ask(y) == 1) {  console.log(y);
    sum += 1;
    console.log("right awnser" , sum);
  };
  let z = prompt("as u see do u consider me above 24!").toLowerCase();
  if (ask(z) == 1) {
    sum += 1;
    console.log("right awnser" , sum);
  };
  let c = prompt("do u think that im a full stack programmer! ").toLowerCase();
  if (ask(c) !== 1) {
    sum += 1;
    console.log("right awnser" , sum);
  }
  let f = prompt("do u think that im one of animals lovers! ").toLowerCase();
  if (ask(f) !== 1) {
    sum += 1;
    console.log("right awnser" , sum);
  }
  let j = prompt("do u think that u arrived to the last question :P !").toLowerCase();
  if (ask(j) == 1) { 
  sum += 1;
  console.log("right awnser" , sum);}

}
console.log(sum);
if (sum>2) {
alert("congratulations u are pass ur grade is :" + sum+"/5" );
}
else {
alert ("sorry u are faild :P ur grade is " + sum +"/5");

};
