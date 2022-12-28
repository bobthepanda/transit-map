import { Coordinates, RelativeCoordinates } from '../interfaces/Dimensions';
import { OFFSET } from './CommonCoordinates';

export const start = (location: Coordinates): string => {
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
}

const EAST = { dx: Factor.POSITIVE, dy: Factor.ZERO };

const WEST = { dx: Factor.NEGATIVE, dy: Factor.ZERO };

const NORTH = { dy: Factor.NEGATIVE, dx: Factor.ZERO };

const SOUTH = { dy: Factor.POSITIVE, dx: Factor.ZERO };

export interface Scales {
  firstDirection: RelativeCoordinates;
  secondDirection: RelativeCoordinates;
}

export const W_TO_N: Scales = { firstDirection: WEST, secondDirection: NORTH };
export const W_TO_S: Scales = { firstDirection: WEST, secondDirection: SOUTH };
export const E_TO_N: Scales = { firstDirection: EAST, secondDirection: NORTH };
export const E_TO_S: Scales = { firstDirection: EAST, secondDirection: SOUTH };
export const S_TO_W: Scales = { firstDirection: SOUTH, secondDirection: WEST };
export const S_TO_E: Scales = { firstDirection: SOUTH, secondDirection: EAST };
export const N_TO_W: Scales = { firstDirection: NORTH, secondDirection: WEST };
export const N_TO_E: Scales = { firstDirection: NORTH, secondDirection: EAST };

export interface NewCurveParameters extends Scales {
  control: Coordinates;
  end: Coordinates;
  radius?: number;
}

export const curveTo = ({
  control,
  end,
  firstDirection,
  secondDirection,
  radius = OFFSET,
}: NewCurveParameters) => {
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
