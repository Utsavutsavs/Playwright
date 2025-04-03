var condition = 9000;
if (typeof (condition) === "string") {
    console.log("conditon matched");
}
else {
    console.log("Didnot matched");
}
//While loop
var pole = 15;
var i = 1;
while (pole >= 5) {
    console.log("Less than pole");
    i++;
    pole -= i;
    console.log(pole + "----");
}
var numx = true;
if (!numx) {
    console.log("Const value changed");
}
else {
    console.log("cant changed value of const");
}
//for loop
var forloop = 10;
var values = 1;
for (values; forloop >= values; values++) {
    console.log("current number is" + values);
}
