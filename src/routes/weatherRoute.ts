import express from "express";
import { getMultipleWeatherData } from "../controllers/weatherController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:city", validateCityName, getMultipleWeatherData);
router.get("/:city", validateCityName, getMultipleWeatherData);

// We will export the router
export default router;
