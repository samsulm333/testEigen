// ALGORITMA 3
const containWord = (query, input) => {
  let output = [];
  let outputWord = [];

  for (i = 0; i < query.length; i++) {
    let count = 0;
    for (j = 0; j < input.length; j++) {
      if (query[i] == input[j]) {
        count++;
      } else {
        count = count;
      }
    }
    output.push(count);

    let countText = "";
    if (count == 0) {
      countText = "tidak ada";
    } else {
      countText = `terdapat ${count}`;
    }
    outputWord.push(`kata "${query[i]}" ${countText} pada INPUT`);
  }

  let outputWordText = outputWord.join(", ");
  let outputText = output.join(", ");
  console.log(`OUTPUT = [${outputText}] karena ${outputWordText}`);
  //   console.log(output);
};

let INPUT = ["xc", "dz", "bbb", "dz", "dz", "dz"];
let QUERY = ["bbb", "ac", "dz"];

containWord(QUERY, INPUT);
