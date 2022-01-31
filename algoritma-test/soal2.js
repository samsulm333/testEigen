// ALGORITMA 2
const longest = (sentence) => {
  const sentenceArray = sentence.split(" ");
  let longestWord = "";
  let longestWordChar = 0;

  //// solution #1
  // for (i=0; i < sentenceArray.length; i++){
  //   if (sentenceArray[i].length > longestWordChar){
  //     longestWord = sentenceArray[i];
  //     longestWordChar = sentenceArray[i].length;
  //   }
  // }

  ////solution #2
  sentenceArray.map((word) => {
    if (word.length > longestWordChar) {
      longestWord = word;
      longestWordChar = word.length;
    }
  });
  console.log(`${longestWord} : ${longestWordChar} character`);
};

longest("Saya sangat senang mengerjakan soal algoritma");
