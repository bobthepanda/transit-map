import { MAJOR_LINE } from '../../../map/GridLines';
import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { E, N, NE, S, SW, W, findIntersectionFromSlopes, offset, scale, scaleToUnitX } from '../../../utils/PathUtils';
import { generateStationCodes } from '../../../utils/StopUtils';
import { JA_12 } from '../InsideYamanote/Ikebukuro';
import { SA_23 } from '../InsideYamanote/Otsuka';
import { I_15 } from '../InsideYamanote/Sugamo';
import { Akabane, JK_38 } from './Akabane';
import { AKABANE_OFFSET, JK_35, Oji } from './Oji';

export const JK_42 = offset(JK_38, scale(AKABANE_OFFSET, 4));
export const JK_43 = offset(JK_42, AKABANE_OFFSET);
export const JK_47 = offset(JK_43, scale(AKABANE_OFFSET, 4));

const ITABASHI_INTERSECTION = findIntersectionFromSlopes({
    start: offset(JA_12, scaleToUnitX(E, OFFSET * 1.5)),
    firstDirection: NE,
    end: I_15,
    secondDirection: N,
});
export const JA_13 = offset(ITABASHI_INTERSECTION, scaleToUnitX(SW, OFFSET * 2.5));
const JA_14 = offset(JA_13, scaleToUnitX(NE, MAJOR_LINE * 1.5));
export const I_17 = offset(JA_13, scaleToUnitX(E, OFFSET * 2.5));

const Itabashi = () => {
    return (
        <>
            <Stop stationCode="JA 14" location={JA_14} strokeColor="stroke-saikyo" textAlignment={TextAlignment.NW} />
            <g id="itabashi">
                <Stop stationCode="JA 13" location={JA_13} strokeColor="stroke-saikyo" textAlignment={TextAlignment.NW} />
                <Stop stationCode="I 17" location={I_17} strokeColor="stroke-mita" />
            </g>
        </>
    );
};

export const NIGASHI_SUGAMO_INTERSECTION = findIntersectionFromSlopes({ firstDirection: S, start: I_17, secondDirection: NE, end: SA_23 });
export const I_16 = offset(NIGASHI_SUGAMO_INTERSECTION, scaleToUnitX(S, OFFSET));
export const SA_20 = offset(I_16, scaleToUnitX(W, OFFSET));

const NigashiSugamo = () => {
    return (
        <>
            <g id="nigashi-sugamo">
                <Stop stationCode="I 16" location={I_16} strokeColor="stroke-mita" />
                <Stop stationCode="SA 20" location={SA_20} textAlignment={TextAlignment.NW} />
            </g>
            <LineSegmentWithStepChange
                slope={scaleToUnitX(NE, OFFSET * 3)}
                stops={generateStationCodes('SA', 20, 18)}
                origin={SA_20}
                skipBeginning
                textAlignments={[TextAlignment.SE]}
            />
            <LineSegmentWithStepChange
                slope={scaleToUnitX(SW, OFFSET * 1.5)}
                stops={generateStationCodes('SA', 20, 22)}
                origin={SA_20}
                skipBeginning
                textAlignments={[TextAlignment.NW]}
            />
        </>
    );
};

export const Tohoku = () => {
    return (
        <>
            <Oji />
            <Akabane />
            <Itabashi />
            <NigashiSugamo />
            <LineSegmentWithStepChange
                strokeColor="stroke-keihin-tohoku"
                origin={JK_35}
                slope={AKABANE_OFFSET}
                stops={generateStationCodes('JK', 35, 47)}
                stopsToHide={['JK 34', 'JK 36', 'JK 38']}
                textAlignments={[TextAlignment.LEFT]}
            />
        </>
    );
};

export default Tohoku;
