import { Request, Response } from "express";
import {
  generateDublinWeatherData,
  generateLondonWeatherData,
  generateEdinburghWeatherData,
  generateParisWeatherData,
} from "../services/weatherService.js";
import { validationResult } from "express-validator";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getWeatherData = async (req: Request, res: Response) => {
  // We will use the validationResult function to check if there are any validation errors
  const errors = validationResult(req);

  // If there are validation errors, we will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;
    console.log(city);
    const getCityData = {
      "london": generateLondonWeatherData(),
      "dublin": generateDublinWeatherData(),
      "edinburgh": generateEdinburghWeatherData(),
      "paris": generateParisWeatherData(),

    }

    // We will create a variable with a type of WeatherData
    let finalWeatherData: WeatherData;
    if (city != null || city != undefined) {
      if (getCityData[city] == undefined) {
        res.status(404).send("City not found");
        return;
      }
      finalWeatherData = getCityData[city];
      if (finalWeatherData == undefined) {
        res.status(404).send("City not found");
        return;
      }
      res.status(200).json(finalWeatherData);
      return;
    }

    // We will use an if statement to check which city was passed in
    // if (city === "london") {
    //   console.log(generateLondonWeatherData());
    //   finalWeatherData = generateLondonWeatherData();
    // } else if (city === "dublin") {
    //   finalWeatherData = generateDublinWeatherData();
    // } else {
    //   // If the city is not london or dublin, we will throw an error
    //   res.status(404).send("City not found");
    // }

    // We will return the weather data as JSON
    // res.status(200).json(finalWeatherData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching weather data");
  }
};

export const getMultipleWeatherData = async (req: Request, res: Response) => {
  // We will use the validationResult function to check if there are any validation errors
  const errors = validationResult(req);

  // If there are validation errors, we will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;
    console.log(city);
    const generateData = (city: string) => {
      if (city === "london") {
        return generateLondonWeatherData();
      }
      else if (city === "dublin") {
        return generateDublinWeatherData();
      }
      else if (city === "edinburgh") {
        return generateEdinburghWeatherData();
      }
      else if (city === "paris") {
        return generateParisWeatherData();
      }
      // else {
      //   return undefined;

    }

    // We will create a variable with a type of WeatherData
    let finalWeatherData1: WeatherData;
    let finalWeatherData2: WeatherData;
    let finalWeatherData3: WeatherData;
    if (city != null || city != undefined) {
      finalWeatherData1 = generateData(city);
      finalWeatherData2 = generateData(city);
      finalWeatherData3 = generateData(city);
      if (finalWeatherData1 == undefined) {
        res.status(404).send("City not found");
      }
      res.status(200).json({
        "dayOne": finalWeatherData1,
        "dayTwo": finalWeatherData2,
        "dayThree": finalWeatherData3,
      });
    }
  }

  catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching weather data");
  }
};

