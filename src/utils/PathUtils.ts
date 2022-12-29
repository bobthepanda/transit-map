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

export const EAST = { dx: Factor.POSITIVE, dy: Factor.ZERO };

export const WEST = { dx: Factor.NEGATIVE, dy: Factor.ZERO };

export const NORTH = { dy: Factor.NEGATIVE, dx: Factor.ZERO };

export const SOUTH = { dy: Factor.POSITIVE, dx: Factor.ZERO };

export interface Directions {
  firstDirection: RelativeCoordinates;
  secondDirection: RelativeCoordinates;
}

export interface NewCurveParameters extends Directions {
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
