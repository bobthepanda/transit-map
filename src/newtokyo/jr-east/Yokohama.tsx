import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { NW, offset, W } from '../../utils/PathUtils';
import { OH_27 } from '../odakyu/Odawara';
import { DT_22 } from '../tokyu/DenEnToshi';
import { TY_16 } from '../tokyu/Toyoko';

const YokohamaStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-yokohama" />;
};

const JH_21 = offset(DT_22, { dy: -OFFSET });
const JH_23 = offset(OH_27, { dy: -OFFSET });
const JH_15 = offset(TY_16, { dx: -OFFSET * 0.5, dy: OFFSET });

export const YokohamaStops = () => {
    return (
        <>
            <YokohamaStop stationCode="JH 15" location={JH_15} />
            <YokohamaStop stationCode="JH 21" location={JH_21} />
            <YokohamaStop stationCode="JH 23" location={JH_23} />
        </>
    );
};

export const YokohamaPath = () => {
    return <SVGPath points={[JH_15, JH_23]} directions={[W, NW]} color="stroke-yokohama" />;
};