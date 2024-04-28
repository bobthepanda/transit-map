import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, W, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { JK_22 } from './Mita';

export const JK_21 = offset(JK_22, scaleToUnitX(W, MAJOR_LINE * 1.5));
export const JY_26 = offset(JK_21, scale(N, OFFSET));
export const A_07 = offset(JK_21, scaleToUnitX(N, OFFSET * 4));
export const TakanawaGateway = () => {
    return (
        <>
            <Stop stationCode="A 07" location={A_07} strokeColor="stroke-asakusa" textAlignment={TextAlignment.UP} />
            <g id="takanawa-gateway">
                <Stop stationCode="JY 26" location={JY_26} strokeColor="stroke-yamanote" textAlignment={TextAlignment.UP} />
                <Stop stationCode="JK 21" location={JK_21} strokeColor="stroke-keihin-tohoku" hideText />
            </g>
        </>
    );
};
