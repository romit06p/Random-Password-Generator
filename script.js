// Function to generate a random password
function generatePassword() {
  const length = document.getElementById("passwordLength").value;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_=+[{]}|;:,;";
  let validChars = lowercaseChars;

  // Include uppercase letters
  if (includeUppercase) {
    validChars += uppercaseChars;
  }

  // Include numbers
  if (includeNumbers) {
    validChars += numberChars;
  }

  // Include symbols
  if (includeSymbols) {
    validChars += symbolChars;
  }

  let password = "";
  console.log(validChars);
  // Generate random password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex);
  }

  // Display generated password
  const passwordResult = document.getElementById("passwordResult");
  passwordResult.value = password;
}
