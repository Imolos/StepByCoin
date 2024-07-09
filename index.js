import {roundToDecimalPlaces} from "./helpers/roundTheNumber.js";

/**
 * Height in Millimeters
 */
const CZECH_CROW_COIN_HEIGHT = 1.85;

export function calculateSteps(heightOfBuilding, decimalPlaces, whichCoin) {
    const totalSteps = heightOfBuilding / (whichCoin / 1000)
    return roundToDecimalPlaces(totalSteps, decimalPlaces);
}

