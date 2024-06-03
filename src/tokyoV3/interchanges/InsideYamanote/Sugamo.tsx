import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, W, findIntersectionFromSlopes, offset, roundPoint, scaleToUnitX } from '../../../utils/PathUtils';
import { I_11 } from './Suidobashi';
import { JY_09 } from './Tabata';
import { TABATA_SCALE } from './Uguisuidani';

export const I_15 = findIntersectionFromSlopes({
    start: roundPoint(offset(JY_09, scaleToUnitX(N, TABATA_SCALE - MAJOR_LINE * 0.5)), OFFSET),
    firstDirection: W,
    end: I_11,
    secondDirection: N,
});
export const JY_11 = offset(I_15, scaleToUnitX(W, OFFSET * 0.5), scaleToUnitX(N, OFFSET));
export const Sugamo = () => {
    return (
        <g id="sugamo">
            <Stop stationCode="JY 11" location={JY_11} strokeColor="stroke-yamanote" hideText />
            <Stop stationCode="I 15" location={I_15} strokeColor="stroke-mita" />
        </g>
    );
};
