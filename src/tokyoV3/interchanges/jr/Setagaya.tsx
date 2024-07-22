import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, S, SW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { CHOFU_EAST_SCALE, KO_18 } from './Chofu';
import { SG_08 } from './Gotokuji';
import { SG_01 } from './Sangenjaya';

export const KO_07 = offset(KO_18, scale(CHOFU_EAST_SCALE, 11));
export const SG_10 = offset(KO_07, scale(S, OFFSET));

export const ShimoTokaido = () => {
    return (
        <g id="shimo-tokaido">
            <Stop stationCode="KO 07" location={KO_07} textAlignment={TextAlignment.UP} />
            <Stop stationCode="SG 10" location={SG_10} hideText />
        </g>
    );
};

export const Setagaya = () => {
    return (
        <>
            <LineSegmentWithStepChange
                origin={SG_01}
                stops={generateStationCodes('SG', 1, 5)}
                slope={scaleToUnitX(NW, OFFSET * 4.5)}
                textAlignments={[TextAlignment.SW]}
                skipBeginning
            />
            <LineSegmentWithStepChange
                origin={SG_08}
                stops={generateStationCodes('SG', 8, 6)}
                slope={scaleToUnitX(SW, OFFSET * 5)}
                textAlignments={[TextAlignment.SE]}
                skipBeginning
            />
        </>
    );
};
