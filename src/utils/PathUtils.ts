import { MINOR_LINE } from '../map/GridLines';
import { Coordinates, RelativeCoordinates } from '../interfaces/Dimensions';

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
    HALF_DIAG = Math.sin(Math.atan(0.5)),
    DOUBLE_DIAG = Math.cos(Math.atan(0.5)),
}

export const E = { dx: Factor.POSITIVE };

export const W = { dx: Factor.NEGATIVE };

export const N = { dy: Factor.NEGATIVE };

export const S = { dy: Factor.POSITIVE };

export const SE = { dx: Factor.DIAG, dy: Factor.DIAG };

export const SW = { dx: Factor.NEGATIVE * Factor.DIAG, dy: Factor.DIAG };

export const NE = { dx: Factor.DIAG, dy: Factor.DIAG * Factor.NEGATIVE };

export const NW = { dx: Factor.NEGATIVE * Factor.DIAG, dy: Factor.DIAG * Factor.NEGATIVE };

export const NNW = { dx: Factor.NEGATIVE * Factor.HALF_DIAG, dy: Factor.NEGATIVE * Factor.DOUBLE_DIAG };

export const WNW = { dy: Factor.NEGATIVE * Factor.HALF_DIAG, dx: Factor.NEGATIVE * Factor.DOUBLE_DIAG };

export const NNE = { dx: Factor.HALF_DIAG, dy: Factor.NEGATIVE * Factor.DOUBLE_DIAG };

export const ENE = { dx: Factor.DOUBLE_DIAG, dy: Factor.NEGATIVE * Factor.HALF_DIAG };

export const ESE = { dy: Factor.HALF_DIAG, dx: Factor.DOUBLE_DIAG };

export const WSW = { dx: -Factor.DOUBLE_DIAG, dy: Factor.HALF_DIAG };

export const SSE = { dy: Factor.DOUBLE_DIAG, dx: Factor.HALF_DIAG };

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

export const RADIUS = MINOR_LINE * 4;

const curveTo = ({
    control,
    end,
    firstDirection: { dx: firstDx = 0, dy: firstDy = 0 },
    secondDirection: { dx: secondDx = 0, dy: secondDy = 0 },
    radius = RADIUS,
}: CurveToParameters) => {
    const startCurve: Coordinates = {
        x: control.x - firstDx * Math.abs(radius),
        y: control.y - firstDy * Math.abs(radius),
    };
    const endCurve: Coordinates = {
        x: control.x + secondDx * Math.abs(radius),
        y: control.y + secondDy * Math.abs(radius),
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
    const { dx = 0, dy = 0 } = slope;

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

export const midPoint = ({ x: x1, y: y1 }: Coordinates, { x: x2, y: y2 }: Coordinates): Coordinates => {
    return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
};

export const offset = ({ x, y }: Coordinates, { dx = 0, dy = 0 }: RelativeCoordinates): Coordinates => {
    return { x: x + dx, y: y + dy };
};

export const scale = ({ dx = 0, dy = 0 }: RelativeCoordinates, value: number): RelativeCoordinates => {
    return { dx: dx * value, dy: dy * value };
};
