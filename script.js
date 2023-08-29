// JavaScript code here
const skillSafari = "Skill Safari";
const lengthOfString = skillSafari.length;
const uppercaseString = skillSafari.toUpperCase();
const indexOfA = skillSafari.indexOf("a");

const conversation = [
 "It’s not who I am underneath, but what I do that defines me"
];

const calculateBMI = (weight, height) => {
  const bmi = weight / (height * height);
  return bmi;
};

const weight = 110; // in kilograms
const height = 1.75; // in meters

const bmi = calculateBMI(weight, height);

// Displaying the results on the webpage
const resultContainer = document.getElementById("resultContainer");

const lengthResult = document.createElement("p");
lengthResult.textContent = `Length of the string: ${lengthOfString}`;
resultContainer.appendChild(lengthResult);

const uppercaseResult = document.createElement("p");
uppercaseResult.textContent = `String in uppercase: ${uppercaseString}`;
resultContainer.appendChild(uppercaseResult);

const indexOfAResult = document.createElement("p");
indexOfAResult.textContent = `Index of 'a': ${indexOfA}`;
resultContainer.appendChild(indexOfAResult);

const conversationResult = document.createElement("h2");
conversationResult.textContent = "Famous Conversation:";
resultContainer.appendChild(conversationResult);

const conversationList = document.createElement("ul");
for (const line of conversation) {
  const listItem = document.createElement("li");
  listItem.textContent = line;
  conversationList.appendChild(listItem);
}
resultContainer.appendChild(conversationList);

const bmiResult = document.createElement("p");
bmiResult.textContent = `Body Mass Index (BMI): ${bmi.toFixed(2)}`;
resultContainer.appendChild(bmiResult);
