//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): object {
    const car: { [key: string]: any } = {
      manufacturer: manufacturer,
      modelName: modelName,
    };
  
    for (let option of options) {
      const key = Object.keys(option)[0];
      const value = option[key];
      car[key] = value;
    }
  
    return car;
  }
  
  const carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { features: ["Sunroof", "Navigation"] });
  
  console.log(carInfo);
  