function unlockPassword(password) {
  let a = 0;
  let b = 0;
  let c = 0;
  let findPassword = false;
  while (findPassword !== true) {
    const suggestion = +[a, b, c].join("");
    if (suggestion === password) {
      findPassword = true;
      break;
    }
    if (c === 9) {
      b++;
      c = 0;
    } else {
      c++;
    }
    if (b >= 9) {
      a++;
      b = 0;
    }
  }
  return [a, b, c];
}

console.log(unlockPassword(123));
