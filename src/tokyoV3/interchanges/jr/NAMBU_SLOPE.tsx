import { MAJOR_LINE } from '../../../map/GridLines';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, scaleToUnitX } from '../../../utils/PathUtils';

export const NAMBU_SLOPE = scaleToUnitX(S, MAJOR_LINE + OFFSET * 2);
