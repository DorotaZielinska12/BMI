const heightElement = document.querySelector(".js-height");
const weightElement = document.querySelector(".js-weight");
const formElement = document.querySelector(".js-form");
const bmiElement = document.querySelector(".js-bmi");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = heightElement.value;
    let weight = weightElement.value;

    let bmi = weight / ((height / 100) ** 2);

    bmiElement.innerText = bmi.toFixed(2);
});

