var s="Maheshaay";
console.log("------------------------------------");
console.log("touppercase and tolowercase methods");
console.log(s.toUpperCase());
console.log(s.toLowerCase());

console.log("------------------------------------");
console.log("substring-method");
console.log(s.substring(0,3));

console.log("------------------------------------");
console.log("substr-method");
console.log(s.substr(1,3));

console.log("------------------------------------");
console.log("slice- method");
console.log(s.slice(1,4));

console.log("------------------------------------");
console.log("startsWith and endsWith -method");
console.log(s.startsWith("M"));
console.log(s.startsWith("Mah"));

console.log("------------------------------------");
console.log(s.endsWith('y'));
console.log(s.endsWith("ay"));

console.log("------------------------------------");
console.log("repeat-method");
console.log(s.repeat(2));

console.log("------------------------------------");
console.log("charAt and CharCodeAt-method");
console.log(s.charAt(1));
console.log(s.charCodeAt(1));

console.log("------------------------------------");
console.log("String from charcode-method");
console.log(String.fromCharCode(98));

console.log("------------------------------------");
console.log("split-method");
console.log(s.split('a'));
console.log(s.split(""));

console.log("------------------------------------");
console.log("concat-method");
console.log(s.concat("HemanthaAy"));
console.log("------------------------------------");
console.log("includes-method");
console.log(s.includes("he"));
console.log(s.includes("hm"));
console.log(s.includes('h'));


