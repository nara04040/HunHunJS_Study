// **`문제 설명`**

// 각각의 연산 결과가 무엇인지 알아보세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - NaN은 Not-A-Number의 약자입니다.
// - - 연산자는 숫자에서만 정의되므로 모두 숫자로 반환합니다.
// - Javascript에서 + 연산자는 "더하기" 와 "연결"의 의미를 갖고 있습니다.

console.log(1 + "1");
// 11

console.log(1 - "1");
// 0

console.log("1" + "1");
// '11'

console.log(1 * "1");
// 1

console.log(3 * "A");
//  NaN

console.log(1 + 1 + "1");
// 21

console.log("1" + 1 + 1);
// 111

console.log("11" - 1);
// 10

console.log("11" + 1);
//  111

console.log("홍" + "길동");
//  홍길동

console.log(20 === "20");
// false

console.log(20 == "20");
// true

console.log(!true);
// false
