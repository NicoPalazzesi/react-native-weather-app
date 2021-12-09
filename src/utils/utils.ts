const precisionDigits = (value: number, digits: number = 1) => {
  const result = parseFloat(value.toString()).toFixed(digits);
  if(parseFloat(result)%1 === 0) {
    return parseInt(result);
  }
  return parseFloat(result);
};

const isEmpty = (element: any) => {
  if (typeof(element) == "undefined" || element === null) {
    return true; 
  }
  if (typeof(element.length) != "undefined") {
    return element.length == 0;
  }
  return false;
};

const capitalizeFirstLetter = (str: string) => (
  str.charAt(0).toUpperCase() + str.slice(1)
);

const meterPerSecondToKilometersPerHour = (ms: number) => ( ms*3.6 );

export {
  precisionDigits,
  isEmpty,
  capitalizeFirstLetter,
  meterPerSecondToKilometersPerHour
};