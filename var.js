let a = "1";
console.log(typeof a);
a = a * 1;
console.log(typeof a);

let str = "이렇게 해서 " + a + " 표현합니다.";
console.log(str);
str = `이렇게 해서 ${a} 표현합니다.`;
console.log(str);

let longString = `여러 줄에 걸쳐 작성해야 할 정도로 
  긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 
  코드를 읽기 힘들어지니까요.`;
console.log(longString);
