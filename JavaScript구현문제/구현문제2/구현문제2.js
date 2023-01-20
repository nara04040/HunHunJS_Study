/* 구현목록
1. 버튼을 누르면 Counter의 span태그의 숫자가 변한다.
    1-1. decrease를 누르면 숫자의 -1을 한다.
    1-2. increase를 누르면 숫자의 +1을 한다.
    1-3. reset을 누르면 숫자가 0으로 변한다.
2. 버튼에 마우스를 호버하면 배경과 폰트색상이 변한다.
    2-1. 배경은 검은색, 폰트색상은 하얀색
*/

// ============================================================
// querySelectorAll 사용

const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector("#value");
let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classNames = e.currentTarget.classList;

    if (classNames.contains("decrease")) {
      --count;
      counterValue.style.color = "red";
    } else if (classNames.contains("reset")) {
      count = 0;
      counterValue.style.color = "black";
    } else {
      ++count;
      counterValue.style.color = "blue";
    }
    counterValue.textContent = count;
  });
});

// ========================================================

// const decreaseBtn = document.querySelector(".decrease");
// const resetBtn = document.querySelector(".reset");
// const increaseBtn = document.querySelector(".increase");

// let count = 0;

// const decrease = (e) => {
//   --count;
//   document.getElementById("value").textContent = count;
//   document.getElementById("value").style.color = "red";
// };

// const reset = () => {
//   count = 0;
//   document.getElementById("value").textContent = count;
//   document.getElementById("value").style.color = "black";
// };

// const increase = () => {
//   ++count;
//   document.getElementById("value").textContent = count;
//   document.getElementById("value").style.color = "blue";
// };

// decreaseBtn.addEventListener("click", decrease);
// resetBtn.addEventListener("click", reset);
// increaseBtn.addEventListener("click", increase);

// // 1. currentTarget
