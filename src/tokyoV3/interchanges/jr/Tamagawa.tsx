import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, NW, S, SE, SW, W, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { TM_07 } from './Keihin';
import { MG_11, MUSASHI_KOSUGI_TOKYU_SPACING_EAST, TY_11 } from './MusashiKosugi';
import { A_03, IK_05, TAMAGAWA_SLOPE } from './Ookayama';

const MG_09 = offset(MG_11, scale(MUSASHI_KOSUGI_TOKYU_SPACING_EAST, 2));
export const TM_01 = offset(MG_09, scale(SE, OFFSET));
export const TM_02 = findIntersectionFromSlopes({
    start: offset(TM_01, scaleToUnitX(S, MAJOR_LINE), scaleToUnitX(W, OFFSET * 2)),
    firstDirection: E,
    secondDirection: NW,
    end: TM_07,
});

const IK_10 = findIntersectionFromSlopes({
    start: TM_02,
    firstDirection: E,
    secondDirection: SW,
    end: IK_05,
});

const A_02 = findIntersectionFromSlopes({
    start: TM_02,
    firstDirection: E,
    secondDirection: SW,
    end: A_03,
});

export const A_01 = findIntersectionFromSlopes({
    start: offset(A_02, scaleToUnitX(W, OFFSET * 2)),
    firstDirection: S,
    secondDirection: E,
    end: offset(TM_07, scale(TAMAGAWA_SLOPE, 4)),
});

export const Tamagawa = () => {
    return (
        <>
            <g id="shin-maruko">
                <Stop
                    stationCode="TY 09"
                    location={offset(TY_11, scale(MUSASHI_KOSUGI_TOKYU_SPACING_EAST, 2))}
                    textAlignment={TextAlignment.NW}
                />
                <Stop stationCode="MG 09" location={MG_09} hideText />
                <Stop stationCode="TM 01" location={TM_01} hideText />
            </g>
            <Stop stationCode="TM 02" location={TM_02} textAlignment={TextAlignment.NE} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('IK', 10, 5)}
                origin={IK_10}
                endpoint={IK_05}
                skipEnd
                textAlignments={[TextAlignment.NW]}
            />
            <Stop stationCode="A 02" location={A_02} textAlignment={TextAlignment.NW} strokeColor="stroke-asakusa" />
            <Stop stationCode="A 01" location={A_01} strokeColor="stroke-asakusa" />
        </>
    );
};
