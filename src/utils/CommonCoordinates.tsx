import { Coordinates } from "../interfaces/Dimensions";
import { MAJOR_LINE, MINOR_LINE } from "../map/GridLines";

export const OFFSET = MINOR_LINE * 2;

export const OTEMACHI: Coordinates = {x: MAJOR_LINE * 10, y: MAJOR_LINE * 10};
export const CHIYODA_OTEMACHI: Coordinates = { ...OTEMACHI, x: OTEMACHI.x + OFFSET };
export const MARUNOUCHI_OTEMACHI: Coordinates = { ...OTEMACHI, x: OTEMACHI.x + MAJOR_LINE };

export const MITA_HIBIYA: Coordinates = { ...OTEMACHI , y: OTEMACHI.y + MAJOR_LINE * 2 };
export const HIBIYA: Coordinates = { x: MITA_HIBIYA.x + OFFSET * .5, y: MITA_HIBIYA.y - OFFSET };

export const HIBIYA_GINZA: Coordinates = { x: OTEMACHI.x + 4 * MAJOR_LINE, y: OTEMACHI.y + 2 * MAJOR_LINE - OFFSET };

export const CHUO_TOKYO: Coordinates = { x: OTEMACHI.x + MAJOR_LINE * 2, y: OTEMACHI.y + MAJOR_LINE }