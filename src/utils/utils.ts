const formatTemperature = (temperature: number) => (
  parseFloat(temperature.toString()).toFixed(1)
);

const isEmpty = (element: any) => {
  if (typeof(element) == "undefined" || element === null) {
    return true; 
  }
  if (typeof(element.length) != "undefined") {
    return element.length == 0;
  }
  return false;
};

export {
  formatTemperature,
  isEmpty,
};