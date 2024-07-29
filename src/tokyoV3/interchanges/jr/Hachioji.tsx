import { Stop } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { S, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { MITAKA_OFFSET } from './MusashiSakai';
import { JC_19 } from './Tachikawa';

export const JC_22 = offset(JC_19, scale(MITAKA_OFFSET, 3));
export const JH_32 = offset(JC_22, scale(S, OFFSET));
const JH_HACHIOJI_SLOPE = scaleToUnitX(S, OFFSET * 11);
export const Hachioji = () => {
    return (
        <>
            <g id="hachioji">
                <Stop stationCode="JC 33" location={JC_22} strokeColor="stroke-chuo-rapid" hideText />
                <Stop stationCode="JH 32" location={JH_32} strokeColor="stroke-yokohama" />
            </g>
            <LineSegmentWithStepChange
                origin={JH_32}
                stops={generateStationCodes('JH', 32, 22)}
                stopsToSkip={['JH 32']}
                slope={JH_HACHIOJI_SLOPE}
                strokeColor="stroke-yokohama"
            />
        </>
    );
};
