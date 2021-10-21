//JS에서 백틱을 사용한 문자열은 템플릿 리터럴로 인식되며 표현식 사용과 멀티라인 출력에서 큰 장점을 가진다.
var template = `This 
is 
multiline
template`;
var first = "Gyoheon";
var last = "Lee";

console.log(template);
console.log(`My name is ${first} ${last}`);
console.log(`1 + 2 = ${1 + 2}`);