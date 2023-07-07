export const upperCaseFirstLetter = (str: string) => {
  const upperCase = str.charAt(0).toUpperCase() + str.slice(1);
  return upperCase;
};
