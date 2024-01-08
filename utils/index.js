export const renderFirstName = (fullname) => {
  let formalName = "";

  try {
    let name = fullname.trim().split(" ");
    // convert given name to a proper noun
    formalName = name[0][0]
      .toUpperCase()
      .concat(name[0].slice(1).toLowerCase());
  } catch (error) {
    formalName = "";
  }

  return formalName;
};

export const getRandomIndex = (array) => {
  const quotesLength = array.length;
  const randomIndex = Math.floor(Math.random() * quotesLength);

  return randomIndex;
};
