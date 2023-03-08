//Extract the last four characters from the string below; "extravaganza"
var x = "extravaganza"
var lastfour = x.slice(-4);
console.log(lastfour);

//Insert the following string at the fourth index of the below variable: "eat"
//const food = "The quick fox jumped over the lazy dog"
const food = "The quick fox jumped over the lazy dog"
const eat = "eat"
const insert = food.slice(0,4) + "eat" + food.slice(4)
console.log(insert)

//Count how many times the following string appears in the string variable:
//1. "the"
//2."brown"
//const story= "The quick brown fox jumps over the lazy dog"
const story= "The quick brown fox jumps over the lazy dog"
const count = (story.match(/the/g) || []).length;
console.log(count);
const count2 = (story.match(/brown/g) || []).length;
console.log(count2);

//Using JavaScript, find the following words from the following strings:
//1. "are"
//const string1 = "The pupils are reading in the library";
const string1= "The pupils are reading in the library";
const find = string1.search("are");
console.log(find)


//2. "sitting"
//const string2 = "The child was sitting on the table before it fell"
const string2 = "The child was sitting on the table before it fell"
const geting = string2.search("sitting");
console.log(geting)


//Convert the following strings into the specified format:
//1. UpperCase: "wonderful"
const text1 = "wonderful";
const upper = text1.toUpperCase();
console.log(upper)

//2. LowerCase: "amazing", "UndERneath"
const text2 = "amazing"
const lower = text2.toLowerCase();
const text3 = "UndERneath"
const lower2 = text3.toLowerCase();
console.log(lower);
console.log(lower2);

//3. Title case "A wonderful world"
const text4 = "A wonderful world";
const title=text4.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(title);








