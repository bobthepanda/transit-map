import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { E_01 } from './Shinjuku';

export const E_28_START = offset(E_01, scaleToUnitX(W, MAJOR_LINE * 1.5 - OFFSET * 0.5));
export const E_28 = offset(E_28_START, scaleToUnitX(S, OFFSET));
export const Tochomae = () => {
    return (
        <g id="tochomae">
            <Stop stationCode="E 28" location={E_28_START} strokeColor="stroke-oedo" textAlignment={TextAlignment.UP} />
            <Stop stationCode="E 28" location={E_28} strokeColor="stroke-oedo" hideText />
        </g>
    );
};
