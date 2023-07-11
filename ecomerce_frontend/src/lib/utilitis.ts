export const upperCaseFirstLetter = (str: string) => {
  const upperCase = str[0].toUpperCase() + str.slice(1);
  return upperCase;
};

export const firstFive = (arr: any[]) => {
  return arr.slice(0, 5);
};
