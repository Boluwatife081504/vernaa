/*var a ="3";
var b ="8";
var c=a;
alert(a=b);
alert(b=c);
var myname= "john";
alert(myname);
var yourname= prompt("what is your name");
alert( "my name is " + myname + ", welcome to my page " + yourname + "!");*/
//var tweet = prompt("enter your tweet");
//var tweetcount= tweet.length;
//alert("you have written " + tweetcount + " characters , you have " + (180-tweetcount) + " characters left");
/*var tweet = prompt("compose your tweet");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);*/
//alert(prompt("your text").slice(0,64));
/*function getMilk(bottles) {
    alert("moveUp");
    alert("moveRight");
    alert("iLoveYou");
    var noOfBottles = Math.floor(bottles / 7);
    alert("buy " + noOfBottles + " bottles of milk");
    return bottles % 7;
}
var change = getMilk(100);
alert("you have " + change + " naira left");*/
/*function closer(){
    alert("hey, i was doing just fine before i met you");
    alert("i drink too much and thats an issue but im okay");
}*/

//BUILDING A BMI CALCULATOR//
//console.log(closer());
/*function BMI(weight, height){
    alert("your answer is " + solution(weight, height)+" okay?");
}
function solution(startingWeight, startingHeight){
    var yourBMI =Math.round(startingWeight / (startingHeight * startingHeight));
    return yourBMI
}
console.log("your answer is" + BMI(65, 1.8));

var n = Math.random();
n = (n * 100) ;
n = Math.round(n);
if (n > 70){
    alert("you have a " + n + " lovescore, you love eachother so well")
}
if( n > 30 &&  n <= 70) {
    alert("you have a " + n + " lovescore, youre gettting to know eachother more")
}
if (n <= 30) {
    alert("you have a " + n + " lovescore, sikes you dont love eachother ")
}*/
function x(Velocity , initialVelocity , time){
    alert("your calculated acceleration is= " + Acceleration(Velocity , initialVelocity, time))
}
function Acceleration(FinalVelocity, InitialVelocity , timeTaken){
    var acc = ((FinalVelocity - InitialVelocity) / timeTaken);
    return acc
}
console.log(x(10, 3, 2))


