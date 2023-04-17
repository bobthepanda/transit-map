import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NW, WNW, offset } from '../../utils/PathUtils';
import { KO_25 } from '../keio/MainLine';
import { OH_18 } from '../odakyu/Odawara';
import { DT_10 } from '../tokyu/DenEnToshi';
import { TY_11 } from '../tokyu/Toyoko';
import { JK_16 } from './KeihinTohoku';

const NambuStop = ({ stationCode, location, textAlignment }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} textAlignment={textAlignment} strokeColor="stroke-nambu" />;
};

const JN_01 = offset(JK_16, { dx: -OFFSET });
const JN_07 = offset(TY_11, { dy: OFFSET }, { dy: -OFFSET * 0.5, dx: -OFFSET });
const JN_10 = offset(DT_10, { dy: OFFSET });
const JN_14 = offset(OH_18, { dy: -OFFSET });
const JN_21 = offset(KO_25, { dy: -OFFSET, dx: OFFSET * 0.5 });
const JN_02 = offset(JN_01, { dy: -MAJOR_LINE + MINOR_LINE, dx: -MAJOR_LINE + OFFSET * 2.5 });

export const NambuStops = () => {
    return (
        <>
            <NambuStop stationCode="JN 01" location={JN_01} />
            <NambuStop stationCode="JN 02" location={JN_02} />
            <NambuStop stationCode="JN 07" location={JN_07} />
            <NambuStop stationCode="JN 10" location={JN_10} />
            <NambuStop stationCode="JN 14" location={JN_14} />
            <NambuStop stationCode="JN 21" location={JN_21} />
        </>
    );
};

export const NambuPath = () => {
    return <SVGPath points={[JN_01, JN_02, JN_07, JN_10, JN_21]} directions={[NW, N, NW, WNW, N]} color="stroke-nambu" />;
};
