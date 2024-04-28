import { MAJOR_LINE } from '../../../map/GridLines';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NE, NW, SW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_16 } from '../InsideYamanote/Okubo';

export const JB_09 = offset(
    JY_16,
    scaleToUnitX(NW, MAJOR_LINE),
    scale(NE, OFFSET),
    scaleToUnitX(SW, OFFSET * 1.5),
    scaleToUnitX(E, OFFSET * 0.5)
);
export const CHUO_OFFSET = scaleToUnitX(NW, MAJOR_LINE);
