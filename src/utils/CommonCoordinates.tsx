import { Coordinates } from '../interfaces/Dimensions';

// A0 dimensions.
export const A0_WIDTH = 2384;
export const A0_HEIGHT = 3370;

export const WIDTH = A0_WIDTH * 3;
export const HEIGHT = A0_HEIGHT * 3;

export const MINOR_LINE = 12;
export const MAJOR_LINE = 12 * MINOR_LINE;
export const OFFSET = MINOR_LINE * 2;

export const alignToGrid = ({ x, y }: Coordinates): Coordinates => {
    return { x: x - (x % MAJOR_LINE), y: y - (y % MAJOR_LINE) };
};
