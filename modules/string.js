function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function decapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
function reverse(string) {
    return string.split('').reverse().join('');
}
function truncate(str, length) {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  } else {
    return str;
  }
}
function slugify(str) {
  // Remove non-alphanumeric characters and spaces
  str = str.replace(/[^a-zA-Z0-9 ]/g, '');

  // Replace spaces with hyphens
  str = str.replace(/ /g, '-');

  // Convert to lowercase
  str = str.toLowerCase();

  return str;
}
function camelCase(str) {
  // Split the string into words based on spaces and hyphens
  const words = str.split(/[- ]/);

  // Capitalize all but the first word
  const capitalizedWords = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  // Join the words together
  return capitalizedWords.join('');
}
function kebabCase(str) {
  // Replace uppercase letters with a hyphen followed by the lowercase version
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');

  // Replace spaces and underscores with hyphens
  str = str.replace(/[\s_]/g, '-');

  // Convert the entire string to lowercase
  str = str.toLowerCase();

  return str;
}
function snakeCase(str) {
  // Replace uppercase letters with a hyphen followed by the lowercase version
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');

  // Replace spaces and underscores with hyphens
  str = str.replace(/[\s_]/g, '-');

  // Convert the entire string to lowercase
  str = str.toLowerCase();

  return str;
}
function isPalindrome(str) {
  // Remove non-alphanumeric characters and spaces
  str = str.replace(/[^a-zA-Z0-9]/g, '');

  // Convert the string to lowercase
  str = str.toLowerCase();

  // Check if the string is equal to its reversed version
  return str === str.split('').reverse().join('');
}

module.exports = {
    capitalize,
    decapitalize,
    reverse,
    truncate,
    slugify,
    camelCase,
    kebabCase,
    snakeCase,
    isPalindrome
}