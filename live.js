const fishbuzz = params => {
  for (let i = 1; i < params; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fish bush", i);
    } else if (i % 3 == 0) {
      console.log("fish", i);
    } else if (i % 5 == 0) {
      console.log("bush", i);
    } else {
      continue;
    }
  }
};
fishbuzz(20);

const sortData = (params, tipe) => {
  for (let i = 0; i < params.length; i++) {
    for (let j = 0; j < params.length; j++) {
      if (
        tipe == "asc" ? params[j] > params[j + 1] : params[j] < params[j + 1]
      ) {
        [params[j], params[j + 1]] = [params[j + 1], params[j]];
      }
    }
  }
  console.log(tipe, params);
};
sortData([1, 3, 2, 1, 5], "asc");

const checkReverse = params => {
  let newData = "";
  for (let i = params.length - 1; i >= 0; i--) {
    // console.log(i, params[i]);
    newData += params[i];
  }
  return params == newData;
};
console.log(checkReverse("madam"));
