import { Coordinates, RelativeCoordinates } from '../interfaces/Dimensions';
import { OFFSET } from './CommonCoordinates';

export const startAtLocation = (location: Coordinates): string => {
    return `M ${location.x} ${location.y}`;
};

export const horizontalToLocation = (location: Coordinates): string => {
    return `H ${location.x}`;
};

export const verticalToLocation = (location: Coordinates): string => {
    return `V ${location.y}`;
};

export const lineToLocation = (location: Coordinates): string => {
    return `L ${location.x} ${location.y}`;
};

enum Factor {
    POSITIVE = 1,
    NEGATIVE = -1,
    ZERO = 0,
    DIAG = Math.sin(Math.atan(1)),
}

export const EAST = { dx: Factor.POSITIVE, dy: Factor.ZERO };

export const WEST = { dx: Factor.NEGATIVE, dy: Factor.ZERO };

export const NORTH = { dy: Factor.NEGATIVE, dx: Factor.ZERO };

export const SOUTH = { dy: Factor.POSITIVE, dx: Factor.ZERO };

export const SOUTHEAST = { dx: Factor.DIAG, dy: Factor.DIAG };

export const SOUTHWEST = { dx: Factor.NEGATIVE * Factor.DIAG, dy: Factor.DIAG };

export const NORTHEAST = { dx: Factor.DIAG, dy: Factor.DIAG * Factor.NEGATIVE };

export const NORTHWEST = { dx: Factor.NEGATIVE * Factor.DIAG, dy: Factor.DIAG * Factor.NEGATIVE };

export interface Directions {
    firstDirection: RelativeCoordinates;
    secondDirection: RelativeCoordinates;
}

export interface CommonCurveParameters extends Directions {
    end: Coordinates;
    radius?: number;
}

export interface CurveToParameters extends CommonCurveParameters {
    control: Coordinates;
}

export const curveTo = ({ control, end, firstDirection, secondDirection, radius = OFFSET * 2 }: CurveToParameters) => {
    const startCurve: Coordinates = {
        x: control.x - firstDirection.dx * radius,
        y: control.y - firstDirection.dy * radius,
    };
    const endCurve: Coordinates = {
        x: control.x + secondDirection.dx * radius,
        y: control.y + secondDirection.dy * radius,
    };

    return `${lineToLocation(startCurve)} 
        Q ${control.x} ${control.y} ${endCurve.x} ${endCurve.y}
        ${lineToLocation(end)}`;
};

interface PointGeneration {
    start: Coordinates;
    slope: RelativeCoordinates;
    endReference: Coordinates;
}

export const generatePoint = ({ start, slope, endReference }: PointGeneration): Coordinates => {
    const { dx, dy } = slope;

    if (dx === 0) {
        return { x: start.x, y: endReference.y };
    }

    const slopeRate: number = dy / dx;
    const xDiff: number = endReference.x - start.x;

    return { x: endReference.x, y: start.y + xDiff * slopeRate };
};

const findIntersection = (a1: Coordinates, a2: Coordinates, b1: Coordinates, b2: Coordinates): Coordinates => {
    if (a1.x > a2.x) {
        return findIntersection(a2, a1, b1, b2);
    }
    if (b1.x > b2.x) {
        return findIntersection(a1, a2, b2, b1);
    }

    const c2x = b1.x - b2.x; // (x3 - x4)
    const c3x = a1.x - a2.x; // (x1 - x2)
    const c2y = b1.y - b2.y; // (y3 - y4)
    const c3y = a1.y - a2.y; // (y1 - y2)

    // down part of intersection point formula
    const d = c3x * c2y - c3y * c2x;

    if (d === 0) {
        throw new Error('Number of intersection points is zero or infinity.');
    }

    // upper part of intersection point formula
    const u1 = a1.x * a2.y - a1.y * a2.x; // (x1 * y2 - y1 * x2)
    const u4 = b1.x * b2.y - b1.y * b2.x; // (x3 * y4 - y3 * x4)

    // intersection point formula

    const px = (u1 * c2x - c3x * u4) / d;
    const py = (u1 * c2y - c3y * u4) / d;

    const p = { x: px, y: py };

    return p;
};

const findIntersectionFromSlopes = ({ start: a1, end: b1, firstDirection, secondDirection }: CurveFromParameters): Coordinates => {
    const a2: Coordinates = generatePoint({ start: a1, slope: firstDirection, endReference: b1 });
    const b2: Coordinates = generatePoint({ start: b1, slope: secondDirection, endReference: a1 });
    return findIntersection(a1, a2, b1, b2);
};

export interface CurveFromParameters extends CommonCurveParameters {
    start: Coordinates;
}

export const curveFrom = ({ start, end, firstDirection, secondDirection, radius }: CurveFromParameters): string => {
    const control: Coordinates = findIntersectionFromSlopes({ start, end, firstDirection, secondDirection });
    return curveTo({
        control,
        end,
        firstDirection,
        secondDirection,
        radius,
    });
};
