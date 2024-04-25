var payRate = 12.5;
var hrsWorked = 20;
var grossPay = payRate * hrsWorked;


console.log(grossPay);

var payRate = 25.0;
var hrsWorked = 40;
var grossPay = payRate * hrsWorked;

console.log(grossPay);

var payRate = 17.3;
var overtimePayRate = payRate * 1.5;
var hrsWorked = 45;
var regularHrsWorked = 40;
var overtime = hrsWorked - regularHrsWorked;
var grossPay = 0;

if (hrsWorked > 40) {
  grossPay = payRate * regularHrsWorked + overtime * overtimePayRate;
}
console.log(grossPay);
