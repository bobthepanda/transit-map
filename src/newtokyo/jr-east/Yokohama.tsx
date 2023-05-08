import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, NNW, NW, SE, W, WSW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { OH_27 } from '../odakyu/Odawara';
import { DT_22 } from '../tokyu/DenEnToshi';
import { TY_16 } from '../tokyu/Toyoko';
import { JK_11, JK_12, JK_13 } from './KeihinTohoku';

const YokohamaStop = ({ stationCode, location, textAlignment, hideText }: StopDefinition) => {
    return (
        <Stop
            stationCode={stationCode}
            location={location}
            textAlignment={textAlignment}
            hideText={hideText}
            strokeColor="stroke-yokohama"
        />
    );
};

const JH_21 = offset(DT_22, { dy: -OFFSET });
const JH_23 = offset(OH_27, { dy: -OFFSET });
const JH_15 = offset(TY_16, { dx: -OFFSET * 0.5, dy: OFFSET });
const JH_13 = offset(JK_13, scale(NNW, OFFSET));
const JH_12 = offset(JK_12, scale(NNW, OFFSET));
const JH_14 = offset(JH_15, { dx: MAJOR_LINE * 2, dy: MAJOR_LINE * 1.5 });
const JH_11 = offset(JK_11, scale(WSW, OFFSET));
export const YokohamaStops = () => {
    return (
        <>
            <YokohamaStop stationCode="JH 11" location={JH_11} hideText />
            <YokohamaStop stationCode="JH 12" location={JH_12} hideText />
            <YokohamaStop stationCode="JH 13" location={JH_13} />
            <YokohamaStop stationCode="JH 14" location={JH_14} />
            <LineSegmentWithStepChange
                stops={generateStationCodes('JH', 15, 19)}
                origin={JH_15}
                slope={scaleToUnitX(W, MAJOR_LINE + OFFSET * 2)}
                strokeColor="stroke-yokohama"
                textAlignments={[TextAlignment.UP]}
            />
            <YokohamaStop stationCode="JH 20" location={offset(JH_21, scaleToUnitX(SE, MAJOR_LINE))} />
            <YokohamaStop stationCode="JH 21" location={JH_21} />
            <YokohamaStop stationCode="JH 23" location={JH_23} />
        </>
    );
};

export const YokohamaPath = () => {
    return <SVGPath points={[JH_11, JH_12, JH_14, JH_15, JH_23]} directions={[NNW, ENE, NNW, W, NW]} color="stroke-yokohama" />;
};
