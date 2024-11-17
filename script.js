function indexOfIgnoreCase(s1, s2) {
    s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  if (s2.length === 0 || s1.length === 0) {
    return -1;
  }

  let to = s2.length;
  for (let from = 0; from <= s1.length - s2.length; from++) {
    if (s1.substring(from, from + to) === s2) {
      return from;
    }
  }

  return -1;
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
