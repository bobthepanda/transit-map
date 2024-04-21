import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_11 } from './Sugamo';

export const JY_12 = offset(JY_11, scaleToUnitX(W, MAJOR_LINE + OFFSET * 1.5));
export const OTSUKA_SAKURA_OFFSET = offset(JY_12, scaleToUnitX(S, OFFSET));
export const SA_23 = OTSUKA_SAKURA_OFFSET;
export const Otsuka = () => {
    return (
        <g id="otsuka">
            <Stop stationCode="JY 12" location={JY_12} strokeColor="stroke-yamanote" textAlignment={TextAlignment.UP} />
            <Stop stationCode="SA 23" location={SA_23} textAlignment={TextAlignment.SE} />
        </g>
    );
};
