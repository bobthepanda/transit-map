import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { N, midPoint, offset, scale } from '../../../utils/PathUtils';
import { OH_01 } from '../InsideYamanote/Shinjuku';
import { OH_YOYOGI_SLOPE } from './Noborito';
import { SG_10 } from './Setagaya';

const OH_10 = offset(OH_01, scale(OH_YOYOGI_SLOPE, 9));
export const SG_08 = offset(OH_10, scale(N, OFFSET * 2));
export const SG_09 = midPoint(SG_08, SG_10);

export const Gotokuji = () => {
    return (
        <>
            <g id="gotokuji">
                <Stop stationCode="OH 10" location={OH_10} textAlignment={TextAlignment.DOWN} />
                <Stop stationCode="SG 08" location={SG_08} textAlignment={TextAlignment.NW} />
            </g>
            <Stop stationCode="SG 09" location={SG_09} textAlignment={TextAlignment.UP} />
        </>
    );
};
