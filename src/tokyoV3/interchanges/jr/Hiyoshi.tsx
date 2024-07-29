import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { SW, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { MG_11, TY_11, TY_MUSASHI_KOSUGI_SLOPE } from './MusashiKosugi';

export const TY_13 = offset(TY_11, scale(TY_MUSASHI_KOSUGI_SLOPE, 2));
export const MG_13 = offset(MG_11, scale(TY_MUSASHI_KOSUGI_SLOPE, 2));
export const TY_14 = offset(TY_13, TY_MUSASHI_KOSUGI_SLOPE, scaleToUnitX(SW, OFFSET));

export const Hiyoshi = () => {
    return (
        <>
            <g id="hiyoshi">
                <Stop stationCode="TY 13" location={TY_13} textAlignment={TextAlignment.NW} />
                <Stop stationCode="MG 13" location={MG_13} hideText />
            </g>
            <LineSegmentWithStepChange
                origin={TY_14}
                slope={TY_MUSASHI_KOSUGI_SLOPE}
                stopsToSkip={['TY 16']}
                stops={generateStationCodes('TY', 14, 20)}
                textAlignments={[TextAlignment.NW]}
            />
        </>
    );
};
