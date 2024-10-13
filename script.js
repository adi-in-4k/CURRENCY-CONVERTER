const apiKey = "cur_live_j8MNk7xUaLiHIsuB4vzMktbjifLG2Ntyfr9vIbkQ";
const apiUrl = `https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`;

// async function fetchData() {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   console.log(data);
// }

var inputElement = document.querySelector("#input-value");

// Get the initial value of the input field
// var value = inputElement.value;

document.querySelector("#submit").addEventListener("click", () => {
  console.log("button clicked");

  async function fetchData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  }

  fetchData();

  // value = inputElement.value;
  var value = inputElement.value;

  //   // let inputVal = console.log(document.querySelector("#input-value").value);
  console.log(value);
  console.log(document.querySelector("select[name = 'country']").value);
});
