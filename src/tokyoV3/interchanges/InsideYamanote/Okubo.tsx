import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NE, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { JY_17 } from './Shinjuku';

export const JY_16 = offset(JY_17, scaleToUnitX(NE, OFFSET * 5));
export const Okubo = () => {
    return (
        <g id="okubo">
            <Stop stationCode="JY 16" location={JY_16} strokeColor="stroke-yamanote" textAlignment={TextAlignment.SE} />
        </g>
    );
};
