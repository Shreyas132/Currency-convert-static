import { currencylist } from "./Currencylist.js";
const apiKey = "36d5befdd6cc4d9f2b14f0aa";

const currencyobjectdropdown = () => {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");

  currencylist.forEach((currency) => {
    const option1 = document.createElement("option");
    option1.value = currency.code;
    option1.textContent = `${currency.name} (${currency.code})`;
    const option2 = option1.cloneNode(true);

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });
};
currencyobjectdropdown();

const convertCurrency = async () => {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const exchangerate = data.conversion_rate;
    const result = amount * exchangerate;
    document.getElementById(
      "result"
    ).textContent = `${amount} ${fromCurrency} is equal to ${result.toFixed(
      2
    )} ${toCurrency}`;
  } catch (error) {
    console.log(error);
  }
};
document.getElementById('convertion').addEventListener('click',convertCurrency)
