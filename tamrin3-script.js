const sentence = "SalAm sahar HaLEt cheTore?";
const charMap = countCharacters(sentence);
function countCharacters(sentence) {
    const charMap = new Map();
    
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence.charAt(i);
      const count = charMap.get(char) || 0;
      charMap.set(char, count + 1);
    }
    
    return charMap;
  }
  console.log(charMap);