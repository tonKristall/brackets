module.exports = function check(str, bracketsConfig) {
  let openbrarr = [];
  let closebrarr = [];
  let needclose = [];
  for (i = 0; i < bracketsConfig.length; i++) {
    let config = [];
    config = bracketsConfig[i];
    openbrarr.push(config[0]);
    closebrarr.push(config[1]);
  }
  let strarr = str.split("");
  for (i = 0; i < strarr.length; i++) {
    if (openbrarr.includes(strarr[i])) {
      if (closebrarr.includes(strarr[i])) {
        if (!needclose.includes(strarr[i])) {
          needclose.push(strarr[i]);
        } else if (needclose[needclose.length - 1] == strarr[i]) {
          needclose.pop();
        } else {
          return false;
        }
      } else {
        needclose.push(strarr[i]);
      }
    } else if (closebrarr.includes(strarr[i])) {
      let n = closebrarr.indexOf(strarr[i]);
      if (needclose[needclose.length - 1] == openbrarr[n]) {
        needclose.pop();
      }
      else {
        return false;
      }
    }
  }
  if (needclose.length == 0) {
    return true;
  } else {
    return false;
  }
}
