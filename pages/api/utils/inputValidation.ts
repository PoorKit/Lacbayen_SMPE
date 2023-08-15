function containsOnlyLetters(inputString: string) {
  const pattern = /^[A-Za-z]+$/;
  return pattern.test(inputString);
}

function isValidNumberString(inputString: string) {
  const pattern = /^\d{11}$/;
  return pattern.test(inputString);
}

export async function NameValidation(name: string[]) {
  name.forEach((element) => {
    if (!containsOnlyLetters(element)) {
      throw new Error('Name must contain only letters');
    }
  });
  return true;
}

export async function NumberValidation(number: string) {
  if (!isValidNumberString(number)) {
    throw new Error('Invalid number');
  }
  return true;
}

export function ContainsNoSpecialCharacters(inputString: string) {
  const pattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (pattern.test(inputString)) {
    throw new Error('Special characters are not allowed');
  }
  return true;
}

export function NumberCase(inputNumber: number) {
  if (isNaN(inputNumber)) {
    throw new Error('Input is not a valid number');
  }
  return inputNumber;
}

export function WordCase(inputString: string) {
  const WordCased =
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
  return WordCased;
}
