var a=["mahi","moni","adi"];
console.log(a);


// for (let index = 0; index < a.length; index++) {
//    console.log(a[index]);
    
// }

console.log("-----------------------------");
console.log("push and pop - method");
console.log(a.push("abc"));
console.log(a.pop());

console.log("-----------------------------");
console.log("shift and unshift - method");
console.log(a.unshift("green","red"));
console.log(a.shift());

console.log("-----------------------------");
console.log("splice - method");
// console.log(a.splice(1,0,"yes","no"));
console.log(a);
console.log(a.splice(1,2,"yes","no"));
console.log(a);

console.log("-----------------------------");
console.log("slice - method");
console.log(a.slice(1,3));

console.log("-----------------------------");
console.log("includes - method");
console.log(a);
console.log(a.includes("adi"));
console.log("-----------------------------");
console.log("indexof and lastindexof - method");
// console.log(a.indexOf("adi",4));
console.log(a.indexOf("adi"));
// console.log(a.indexOf("adi",2));

console.log("--l ast index of --");
console.log(a.lastIndexOf("no"));

console.log("-----------------------------");
console.log("concat - method");
var b=['b','c',"dinga"];
console.log(a.concat("nick",b,[1,2]));

console.log(a);

console.log("-----------------------------");
console.log("reverse - method");
console.log(a.reverse());
console.log("-----------------------------");
console.log("join - method");
console.log(a.join("/"));


