const inputEl = document.getElementById("weight-input");
const convertBtn = document.getElementById("convert");
const convertedWeight = document.getElementById("converted");

const convertWeight = () => {
	const pounds = inputEl.value;
	const convertedPounds = pounds * 0.45;
	convertedWeight.innerText = `${convertedPounds}Kg`;
	convertedWeight.style.fontWeight = "bold";
	convertedWeight.style.fontSize = "18px";
	convertedWeight.style.marginLeft = "10px";
};

convertBtn.addEventListener("click", convertWeight);
