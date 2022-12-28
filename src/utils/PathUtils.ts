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
  startOffset: RelativeCoordinates;
  endOffset: RelativeCoordinates;
}

export const W_TO_N: Scales = { startOffset: EAST, endOffset: NORTH };
export const W_TO_S: Scales = { startOffset: EAST, endOffset: SOUTH };
export const E_TO_N: Scales = { startOffset: WEST, endOffset: NORTH };
export const E_TO_S: Scales = { startOffset: WEST, endOffset: SOUTH };
export const S_TO_W: Scales = { startOffset: NORTH, endOffset: WEST };
export const S_TO_E: Scales = { startOffset: NORTH, endOffset: EAST };
export const N_TO_W: Scales = { startOffset: SOUTH, endOffset: WEST };
export const N_TO_E: Scales = { startOffset: SOUTH, endOffset: EAST };

export interface NewCurveParameters extends Scales {
  control: Coordinates;
  end: Coordinates;
  radius?: number;
}

export const curveTo = ({
  control,
  end,
  startOffset: relativeControl,
  endOffset: relativeEndpoint,
  radius = OFFSET,
}: NewCurveParameters) => {
  const startCurve: Coordinates = {
    x: control.x + relativeControl.dx * radius,
    y: control.y + relativeControl.dy * radius,
  };
  const endCurve: Coordinates = {
    x: control.x + relativeEndpoint.dx * radius,
    y: control.y + relativeEndpoint.dy * radius,
  };

  return `${lineToLocation(startCurve)} 
        Q ${control.x} ${control.y} ${endCurve.x} ${endCurve.y}
        ${lineToLocation(end)}`;
};
