const toLowerOrUpper = (str: string, upper: boolean = false): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};
