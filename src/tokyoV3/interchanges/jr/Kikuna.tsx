import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, S, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { TY_14 } from './Hiyoshi';
import { JH_13 } from './Keihin';
import { TY_MUSASHI_KOSUGI_SLOPE } from './MusashiKosugi';

export const TY_16 = offset(TY_14, scale(TY_MUSASHI_KOSUGI_SLOPE, 2));
export const JH_15 = offset(TY_16, scale(S, OFFSET));
export const JH_14 = {
    x: JH_15.x + OFFSET * 2,
    y: midPoint(JH_13, JH_15).y,
};

export const JH_KIKUNA_SLOPE = scaleToUnitX(NW, MAJOR_LINE);

export const Kikuna = () => {
    return (
        <>
            <g id="kikuna">
                <Stop stationCode="TY 16" location={TY_16} />
                <Stop stationCode="JH 15" location={JH_15} strokeColor="stroke-yokohama" hideText />
            </g>
            <Stop stationCode="JH 14" location={JH_14} strokeColor="stroke-yokohama" />
            <LineSegmentWithStepChange
                origin={JH_15}
                stops={generateStationCodes('JH', 15, 21)}
                stopsToSkip={['JH 15']}
                slope={JH_KIKUNA_SLOPE}
                strokeColor="stroke-yokohama"
            />
        </>
    );
};
