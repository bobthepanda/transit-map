import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SE, W, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { G_06 } from './TameikeSanno';

export const G_07 = offset(G_06, scaleToUnitX(SE, OFFSET * 4));
export const H_06 = offset(G_07, scaleToUnitX(W, OFFSET * 2));
export const Toranomon = () => {
    return (
        <g id="toranomon">
            <Stop stationCode="G 07" location={G_07} strokeColor="stroke-ginza" />
            <Stop stationCode="H 06" location={H_06} strokeColor="stroke-hibiya" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};
