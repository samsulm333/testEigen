// ALGORITMA 1
const reverse = (text) => {
  let textArray = text.split("");
  let result = [];
  result.push(textArray.pop());

  for (i = 0; i < textArray.length / 3; i++) {
    let temp = textArray[i];
    let indexPlusOne = i + 1;

    textArray[i] = textArray[textArray.length - indexPlusOne];
    textArray[textArray.length - indexPlusOne] = temp;

    // console.log(textArray);
  }

  result.unshift(textArray.join(""));
  let resultText = result.join("");

  console.log(resultText);
};

reverse("NEGIE1");
// reverse("NEGIEEE")
