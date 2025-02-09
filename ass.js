function checkPalindromeAndModify(str) 
{
  let newStr = '';
  for (let i = 0; i < str.length; i++) 
  {
    let char = str[i].toLowerCase();
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) 
    {
      newStr += char;
    }
  }

  let isPalindrome = true;
  let left = 0;
  let right = newStr.length - 1;
  while (left < right) 
  {
    if (newStr[left] !== newStr[right]) {
      isPalindrome = false;
      break;
    }
    left++;
    right--;
  }

  if (isPalindrome) 
  {
    console.log("The string is a palindrome.");

    let modifiedStr = '';
    for (let i = 0; i < str.length; i++) 
    {
      let char = str[i];
      if (char === 'a') 
      {
        modifiedStr += 'c';
      } 
      else if (char === 'b') 
      {
        modifiedStr += 'd';
      } 
      else 
      {
        modifiedStr += char;
      }
    }

    console.log("Modified string: " + modifiedStr);
  } else {
    console.log("The string is not a palindrome.");
  }
}

let inputStr = prompt("Enter a string to check if it's a palindrome:");

checkPalindromeAndModify(inputStr);