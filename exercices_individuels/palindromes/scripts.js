// Retourne le nombre de jours dans un mois donné
const maxDaysInMonth = (month, year) => {
  if ([4, 6, 9, 11].includes(month)) return 30;
  if (month === 2) {
    // Test année bissextile (CORRIGÉ : ajout de ||)
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
  }
  return 31;
};

// Vérifie si une date est valide (format et valeur réelle)
const isValidDate = (dateString) => {
  // CORRIGÉ : échapper les / dans la regex
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(dateString)) return false;
  
  const [dayStr, monthStr, yearStr] = dateString.split("/");
  const day = parseInt(dayStr, 10);
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);
  
  // CORRIGÉ : ajout de || pour le mois
  if (month < 1 || month > 12) return false;
  if (year < 1000 || year > 9999) return false;
  
  const maxDay = maxDaysInMonth(month, year);
  if (day < 1 || day > maxDay) return false;
  
  return true;
};

//  ÉTAPE 2 

// Vérifie si une date valide est un palindrome (ignore les '/')
const isPalindrome = (dateString) => {
  if (!isValidDate(dateString)) return false;
  
  // SIMPLIFIÉ : remplacer tous les / par rien
  const cleanDate = dateString.replace(/\//g, "");
  const reversed = cleanDate.split("").reverse().join("");
  
  return cleanDate === reversed;
};

//  ÉTAPE 3 

// Formate une date JS en "dd/mm/yyyy"
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  // CORRIGÉ : template literal avec backticks
  return `${day}/${month}/${year}`;
};

// Retourne les x prochaines dates palindromes à partir d'aujourd'hui
const getNextPalindromes = (count) => {
  const result = [];
  let date = new Date();
  
  while (result.length < count) {
    date.setDate(date.getDate() + 1);
    const dateStr = formatDate(date);
    
    if (isPalindrome(dateStr)) {
      result.push(dateStr);
    }
  }
  
  return result;
};

// ÉTAPE 4 :

// Vérifie si une chaîne est un palindrome 
const isStringPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

// Version dédiée aux dates : vérifie validité + palindrome
const isDatePalindrome = (dateString) => {
  if (!isValidDate(dateString)) return false;
  
  const cleanDate = dateString.replace(/\//g, "");
  return isStringPalindrome(cleanDate);
};


// Tests validation
console.log(isValidDate("03/04/2001")); // true
console.log(isValidDate("31/11/2023")); // false (novembre n'a que 30 jours)
console.log(isValidDate("29/02/2024")); // true (2024 bissextile)
console.log(isValidDate("29/02/2023")); // false (2023 pas bissextile)

// Tests palindromes
console.log(isPalindrome("11/02/2011")); // true
console.log(isPalindrome("03/04/2001")); // false
console.log(isPalindrome("22/02/2022")); // true

// Prochaines dates palindromes
console.log(getNextPalindromes(5)); // Affiche les 5 prochaines

// Tests refactorisation
console.log(isStringPalindrome("radar")); // true
console.log(isStringPalindrome("hello")); // false
console.log(isDatePalindrome("11/02/2011")); // true
console.log(isDatePalindrome("03/04/2001")); // false
