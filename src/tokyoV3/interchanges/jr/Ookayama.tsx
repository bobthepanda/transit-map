import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NW, S, SE, W, findIntersectionFromSlopes, midPoint, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { IK_01 } from '../InsideYamanote/Gotanda';
import { MG_01 } from '../InsideYamanote/Meguro';
import { OM_10 } from './Jiyugaoka';
import { IK_15, OM_01, TM_07 } from './Keihin';

const OOKAYAMA_INTERSECTION = findIntersectionFromSlopes({ start: MG_01, firstDirection: W, secondDirection: NW, end: OM_01 });
const MG_06 = offset(OOKAYAMA_INTERSECTION, scaleToUnitX(E, OFFSET));
const OM_08 = offset(MG_06, scale(S, OFFSET));

export const Ookayama = () => {
    return (
        <>
            <Stop stationCode="OM 09" location={midPoint(OM_08, OM_10)} textAlignment={TextAlignment.NE} />
            <Stop stationCode="MG 07" location={offset(MG_06, scaleToUnitX(W, MAJOR_LINE + OFFSET))} textAlignment={TextAlignment.UP} />
            <g id="ookayama">
                <Stop stationCode="MG 06" location={MG_06} hideText />
                <Stop stationCode="OM 08" location={OM_08} textAlignment={TextAlignment.SW} />
            </g>
            <LineSegmentWithEndpoint
                origin={MG_01}
                endpoint={MG_06}
                stops={generateStationCodes('MG', 1, 6)}
                skipBeginning
                skipEnd
                textAlignments={[TextAlignment.UP]}
            />
        </>
    );
};

const OIMACHI_SLOPE = scaleToUnitX(SE, OFFSET * 3);

const OM_04 = offset(OM_08, scale(OIMACHI_SLOPE, 4));
export const A_03 = offset(OM_04, scale(S, OFFSET));

export const Nakanobu = () => {
    return (
        <g id="nakanobu">
            <Stop stationCode="OM 04" location={OM_04} hideText />
            <Stop stationCode="A 03" location={A_03} strokeColor="stroke-asakusa" textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

const OM_06 = offset(OM_08, scale(OIMACHI_SLOPE, 2));
export const IK_05 = offset(OM_06, scale(W, OFFSET));

export const Hatanodai = () => {
    return (
        <g id="hatanodai">
            <Stop stationCode="OM 06" location={OM_06} hideText />
            <Stop stationCode="IK 05" location={IK_05} textAlignment={TextAlignment.LEFT} />
        </g>
    );
};

export const OimachiLine = () => {
    return (
        <>
            <LineSegmentWithStepChange
                origin={OM_08}
                slope={OIMACHI_SLOPE}
                stops={generateStationCodes('OM', 8, 3)}
                stopsToSkip={['OM 08', 'OM 01', 'OM 04', 'OM 06']}
                textAlignments={[TextAlignment.SW]}
            />
            <Stop stationCode="OM 02" location={offset(OM_01, scaleToUnitX(NW, OFFSET * 5))} textAlignment={TextAlignment.NE} />
            <Nakanobu />
            <Hatanodai />
        </>
    );
};

export const IkegamiLine = () => {
    return (
        <LineSegmentWithStepChange
            origin={IK_01}
            stops={generateStationCodes('IK', 1, 4)}
            textAlignments={[TextAlignment.UP]}
            slope={scaleToUnitX(W, MAJOR_LINE + OFFSET)}
        />
    );
};

export const TAMAGAWA_SLOPE = scaleToUnitX(NW, MAJOR_LINE);
export const IK_14 = findIntersectionFromSlopes({
    start: IK_15,
    firstDirection: N,
    secondDirection: W,
    end: offset(TM_07, TAMAGAWA_SLOPE),
});
export const IK_13 = offset(TM_07, scale(TAMAGAWA_SLOPE, 2), scaleToUnitX(E, MAJOR_LINE * 1.5));
export const TokyuKamataLines = () => {
    return (
        <>
            <LineSegmentWithStepChange
                origin={TM_07}
                slope={TAMAGAWA_SLOPE}
                stops={generateStationCodes('TM', 7, 3)}
                textAlignments={[TextAlignment.SW]}
                stopsToSkip={['TM 07']}
            />
            <Stop stationCode="IK 14" location={IK_14} />
            <LineSegmentWithStepChange
                origin={IK_13}
                slope={TAMAGAWA_SLOPE}
                stops={generateStationCodes('IK', 13, 11)}
                textAlignments={[TextAlignment.NE]}
            />
        </>
    );
};
