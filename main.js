const elements = {
  input: document.getElementById("textInput"),
  char: document.getElementById("charCount"),
  word: document.getElementById("wordCount"),
  spaces: document.getElementById("spaceCount"),
  clearBtn: document.getElementById("clearBtn"),
  submitBtn: document.getElementById("submitBtn"),
};
const logic = {
  wordsCount: "0",
  charsCount: "0",
  spacesCount: "0",
};
const init = () => {
  elements.char.textContent = 0;
  elements.word.textContent = 0;
  elements.spaces.textContent = 0;
  elements.input.value = "";
};
const textAnalyzer = text => {
  const trimmedText = text.trim();
  logic.wordsCount = trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
  logic.charsCount = trimmedText.length;
  logic.spacesCount = (trimmedText.match(/ /g) || []).length;
};
const updateUi = () => {
  elements.char.textContent = logic.charsCount;
  elements.spaces.textContent = logic.spacesCount;
  elements.word.textContent = logic.wordsCount;
};
const theall = () => {
  const currentSentence = elements.input.value;
  textAnalyzer(currentSentence);
  updateUi();
};
elements.submitBtn.addEventListener("click", theall);
elements.clearBtn.addEventListener("click", init);
init();
