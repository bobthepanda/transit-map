import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, N, offset, S, scale, scaleToUnitX, SSW } from '../../utils/PathUtils';
import { JB_15, JB_16 } from '../jr-east/ChuoSobu';
import { JY_30 } from '../jr-east/Yamanote';
import { C_08 } from './Chiyoda';
import { H_11 } from './Hibiya';
import { M_25 } from './Marunouchi';
import { N_07 } from './Namboku';

export const Y_09 = offset(M_25, { dy: -OFFSET });
export const Y_13 = offset(JB_16, scale(ESE, OFFSET * 2));
export const Y_14 = offset(JB_15, scale(ESE, OFFSET * 2));
export const Y_16 = offset(N_07, scaleToUnitX(ENE, OFFSET * 2));
export const Y_18 = offset(JY_30, { dy: OFFSET });
export const Y_20 = offset(H_11, { dy: OFFSET });
export const Y_17 = offset(C_08, { dy: -MAJOR_LINE + OFFSET * 2 });
const Y_15 = offset(Y_16, scaleToUnitX(N, MAJOR_LINE));

const YurakuchoStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-yurakucho" />;
};

export const YurakuchoStops = () => {
    return (
        <>
            <YurakuchoStop stationCode="Y 09" location={Y_09} />
            <YurakuchoStop stationCode="Y 13" location={Y_13} />
            <YurakuchoStop stationCode="Y 14" location={Y_14} />
            <YurakuchoStop stationCode="Y 15" location={Y_15} />
            <YurakuchoStop stationCode="Y 16" location={Y_16} />
            <YurakuchoStop stationCode="Y 17" location={Y_17} />
            <YurakuchoStop stationCode="Y 18" location={Y_18} />
            <YurakuchoStop stationCode="Y 20" location={Y_20} />
        </>
    );
};

export const YurakuchoPath = () => {
    return <SVGPath points={[Y_09, Y_13, Y_16, Y_17, Y_20]} color="stroke-yurakucho" directions={[ESE, SSW, S, E, ESE]} />;
};
