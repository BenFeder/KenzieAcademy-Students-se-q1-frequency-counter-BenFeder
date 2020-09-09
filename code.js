// Your Code here

function countLettersAndWords() {
  // your code will go here ...

  let typedText = document.getElementById("textInput").value;
  typedText = typedText.toLowerCase();

  function countWords(text) {
    text = text.replace(/[^a-z'\s]+/g, "");
    let words = text.split(" ");
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
  }

  function countLetters(text) {
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
  }

  //run functions
  countWords(typedText);
  countLetters(typedText);

  event.preventDefault();
}

countLettersAndWordsButton = document.getElementById("countButton");
countLettersAndWordsButton.addEventListener = ("click", countLettersAndWords);
