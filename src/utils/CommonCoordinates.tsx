import { Coordinates } from "../interfaces/Dimensions";
import { MAJOR_LINE, MINOR_LINE } from "../map/GridLines";

export const OFFSET = MINOR_LINE * 2;

export const OTEMACHI: Coordinates = {x: MAJOR_LINE * 10, y: MAJOR_LINE * 10};
export const CHIYODA_OTEMACHI: Coordinates = { ...OTEMACHI, x: OTEMACHI.x + OFFSET };
export const MARUNOUCHI_OTEMACHI: Coordinates = { ...OTEMACHI, x: OTEMACHI.x + MAJOR_LINE };

export const MITA_HIBIYA: Coordinates = { ...OTEMACHI , y: OTEMACHI.y + MAJOR_LINE * 2 };
export const HIBIYA: Coordinates = { x: MITA_HIBIYA.x + OFFSET * .5, y: MITA_HIBIYA.y + OFFSET };

export const HIBIYA_GINZA: Coordinates = { x: OTEMACHI.x + 3.5 * MAJOR_LINE + OFFSET, y: HIBIYA.y };

export const CHUO_TOKYO: Coordinates = { x: OTEMACHI.x + MAJOR_LINE * 2, y: OTEMACHI.y + MAJOR_LINE - OFFSET * 2 };
export const YAMANOTE_TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET };
export const YAMANOTE_SHIMBASHI = { ...YAMANOTE_TOKYO, y: OTEMACHI.y + MAJOR_LINE * 3 + OFFSET};

export const HIBIYA_KASUMIGASEKI: Coordinates = { x: MITA_HIBIYA.x - MAJOR_LINE, y: MITA_HIBIYA.y + MAJOR_LINE * .5 };
export const NIHOMBASHI: Coordinates = { ...OTEMACHI, x: HIBIYA_GINZA.x - OFFSET };
export const ASAKUSA_NIHOMBASHI: Coordinates = { ...NIHOMBASHI, x: NIHOMBASHI.x + MAJOR_LINE };

export const RAPID_OCHANOMIZU: Coordinates = {x: OTEMACHI.x - OFFSET, y: OTEMACHI.y - MAJOR_LINE * 1.5 + OFFSET};