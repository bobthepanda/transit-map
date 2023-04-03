import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, offset, WNW } from '../../utils/PathUtils';
import { KO_25 } from '../keio/MainLine';
import { OH_18 } from '../odakyu/Odawara';
import { DT_10 } from '../tokyu/DenEnToshi';
import { TY_11 } from '../tokyu/Toyoko';

const NambuStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-nambu" />;
};

const JN_07 = offset(TY_11, { dy: OFFSET });
const JN_10 = offset(DT_10, { dy: OFFSET });
const JN_14 = offset(OH_18, { dy: -OFFSET });
const JN_21 = offset(KO_25, { dy: -OFFSET, dx: OFFSET * 0.5 });

export const NambuStops = () => {
    return (
        <>
            <NambuStop stationCode="JN 07" location={JN_07} />
            <NambuStop stationCode="JN 10" location={JN_10} />
            <NambuStop stationCode="JN 14" location={JN_14} />
            <NambuStop stationCode="JN 21" location={JN_21} />
        </>
    );
};

export const NambuPath = () => {
    return <SVGPath points={[JN_07, JN_21]} directions={[WNW, N]} color="stroke-nambu" />;
};
