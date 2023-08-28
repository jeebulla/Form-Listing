const btnTheme = document.querySelector("#btn-theme");
const inventoryTable = document.querySelector("#inventory");
const colorPallet = document.querySelector("#colors");
const widthTable = document.querySelector("#width");

btnTheme.addEventListener("click", (e) => {
  e.preventDefault();
  let userColor = colorPallet.value;
  inventoryTable.style.backgroundColor = userColor;
  inventoryTable.style.color = "#fff";
  inventoryTable.style.width = `${parseInt(widthTable.value)}px`;
  document.querySelector("#form").reset();
});

const addItem = function (e) {
  e.preventDefault();
  let inventoryList = document.forms["inventoryForm"];
  let formData = new FormData(inventoryList);

  //   let inventoryTable = document.getElementById("name");
  let row = inventoryTable.insertRow();
  //   row.insertCell.innerHTML = formData.get('name');

  for (let [key, value] of formData) {
    row.insertCell().innerHTML = formData.get(key);
    // console.log(key, value);
  }
};
