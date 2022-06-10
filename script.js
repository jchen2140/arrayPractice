//mild practice
var dogWalks = [4, 5, 2, 2, 6, 1, 3];
var pay = [];

dogWalks.forEach(function(numberOfDogs) {
  var dogNumber = numberOfDogs;
  var totalPay = dogNumber*22;
  pay.push(totalPay);
  console.log(`Trisha earned $ ${totalPay} today!`)
});

console.log(pay);


//medium practice
var sum = 0; 
pay.forEach(function(payValue) {
  sum += payValue;
});

console.log(sum);

