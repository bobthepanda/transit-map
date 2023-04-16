import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NE, NW, W, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { OH_27 } from '../odakyu/Odawara';
import { DT_22 } from '../tokyu/DenEnToshi';
import { TY_16 } from '../tokyu/Toyoko';
import { JK_13 } from './KeihinTohoku';

const YokohamaStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-yokohama" />;
};

const JH_21 = offset(DT_22, { dy: -OFFSET });
const JH_23 = offset(OH_27, { dy: -OFFSET });
const JH_15 = offset(TY_16, { dx: -OFFSET * 0.5, dy: OFFSET });
const JH_13 = offset(JK_13, scale(NW, OFFSET));
const JH_14 = offset(JK_13, scaleToUnitX(NE, MAJOR_LINE * 0.5), { dy: -MAJOR_LINE * 3 }, { dy: MINOR_LINE, dx: MINOR_LINE });

export const YokohamaStops = () => {
    return (
        <>
            <YokohamaStop stationCode="JH 13" location={JH_13} />
            <YokohamaStop stationCode="JH 14" location={JH_14} />
            <YokohamaStop stationCode="JH 15" location={JH_15} />
            <YokohamaStop stationCode="JH 21" location={JH_21} />
            <YokohamaStop stationCode="JH 23" location={JH_23} />
        </>
    );
};

export const YokohamaPath = () => {
    return <SVGPath points={[JH_13, JH_14, JH_15, JH_23]} directions={[NE, N, W, NW]} color="stroke-yokohama" />;
};
