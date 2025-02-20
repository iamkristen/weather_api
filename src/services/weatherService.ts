import { faker } from "@faker-js/faker";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateEdinburghWeatherData = (): WeatherData => {
  const generateEdinburghWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -10, max: 20 }),
    humidity: faker.number.int({ min: 65, max: 86 }),
    wind: faker.number.int({ min: 3, max: 45 }),
    rain: faker.number.int({ min: 23, max: 67 }),
  };

  return generateEdinburghWeatherData;
};

export const generateParisWeatherData = (): WeatherData => {
  const generateParisWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -8, max: 24 }),
    humidity: faker.number.int({ min: 46, max: 98 }),
    wind: faker.number.int({ min: 6, max: 99 }),
    rain: faker.number.int({ min: 45, max: 67 }),
  };

  return generateParisWeatherData;
}
