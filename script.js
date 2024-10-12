console.log("script.js is working properly");

console.log(document.querySelector("select[name = 'country']").value);

// console.log(document.querySelector("#input-value").value);
const inputVal = console.log(document.querySelector("#input-value").value);
document.querySelector("#submit").addEventListener("click", () => {
  console.log("button clicked");
  console.log(inputVal);
  //   console.log(inputAmt);
});
