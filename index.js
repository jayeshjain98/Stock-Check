const priceInitial = document.querySelector("#price-initial");
const quantity = document.querySelector("#quantity");
const priceToday = document.querySelector("#price-today");
const check = document.querySelector("#check");
const output = document.querySelector("#output");
const main = document.querySelector("#main");

check.addEventListener("click", () => {
  // @ts-ignore
  clickHandler(priceInitial.value, quantity.value, priceToday.value, output);
});

function clickHandler(initial, qty, final, op) {
  if (initial !== "" && qty !== "" && final !== "") {
    initial = parseFloat(initial);
    qty = parseFloat(qty);
    final = parseFloat(final);
    let costPrice = initial * qty;
    let sellPrice = final * qty;
    if (costPrice < sellPrice) {
      let profit = sellPrice - costPrice;
      let profitPercent = ((profit / costPrice) * 100).toFixed(2);
      output.textContent = `Yay! you made a profit of ₹${profit} that is ${profitPercent}% of the initial price`;
      if (parseFloat(profitPercent) >= 50) {
        main.style.backgroundColor = "green";
      }
    } else if (costPrice > sellPrice) {
      let loss = costPrice - sellPrice;
      let lossPercent = ((loss / costPrice) * 100).toFixed(2);
      output.textContent = `Alas! you just lost ₹${loss} that is ${lossPercent}% of the initial price`;
      if (parseFloat(lossPercent) >= 50) {
        main.style.backgroundColor = "red";
      }
    } else {
      output.textContent = "No profit no loss";
    }
  } else {
    output.textContent = "Please enter all details";
  }
}