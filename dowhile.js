function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned word and compare it to the original
    const reversedWord = cleanedWord.split('').reverse().join('');
    
    return cleanedWord === reversedWord;
  }
  
  function findPalindromesInParagraph(paragraph) {
    const words = paragraph.split(/\s+/); // Split paragraph into words
    const palindromes = [];
  
    for (const word of words) {
      if (isPalindrome(word)) {
        palindromes.push(word);
      }
    }
  
    return palindromes;
  }
  
  const paragraph = "A man, a plan, a canal, Panama. Madam, in Eden, I'm Adam.";
  const palindromeWords = findPalindromesInParagraph(paragraph);
  
  console.log("Palindrome words in the paragraph:");
  console.log(palindromeWords);
  