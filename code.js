// Your Code here
function countWords() {
  let typedText = document.getElementById("textInput").value;
  typedText = typedText.toLowerCase();
  typedText = typedText.replace(/[^a-z'\s]+/g, "");

  let words = typedText.split(" ");
  let wordCounts = {};

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    // do something for each word.
    if (wordCounts[currentWord] === undefined) {
      wordCounts[currentWord] = 1;
    } else {
      wordCounts[currentWord]++;
    }
  }

  for (let word in wordCounts) {
    const spanWords = document.createElement("span");
    const textContentWords = document.createTextNode(
      '"' + word + '": ' + wordCounts[word] + ", "
    );
    spanWords.append(textContentWords);
    document.getElementById("wordsDiv").append(spanWords);
  }

  event.preventDefault();
}

function countLetters() {
  let typedText = document.getElementById("textInput").value;
  typedText = typedText.toLowerCase();
  typedText = typedText.replace(/[^a-z'\s]+/g, "");

  let letterCounts = {};

  for (let i = 0; i < typedText.length; i++) {
    let currentLetter = typedText[i];
    // do something for each letter.
    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }

  for (let letter in letterCounts) {
    const span = document.createElement("span");
    const textContent = document.createTextNode(
      '"' + letter + '": ' + letterCounts[letter] + ", "
    );
    span.append(textContent);
    document.getElementById("lettersDiv").append(span);
  }

  event.preventDefault();
}

countLettersAndWordsButton = document.getElementById("countButton");
countLettersAndWordsButton.addEventListener("click", countWords);
countLettersAndWordsButton.addEventListener("click", countLetters);
