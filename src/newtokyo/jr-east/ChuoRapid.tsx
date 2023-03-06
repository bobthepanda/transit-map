import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, N, NNE, offset, RADIUS, scale, SSW, W, WNW } from '../../utils/PathUtils';
import { JB_12, JB_14, JB_18 } from './ChuoSobu';
import { JY_01, JY_02, JY_17 } from './Yamanote';

export const JC_01 = offset(JY_01, scale(WNW, OFFSET));
export const JC_02 = offset(JY_02, scale(WNW, OFFSET));
export const JC_03 = offset(JB_18, { dy: OFFSET });
export const JC_04 = offset(JB_14, scale(ESE, OFFSET));
export const JB_12_CONTROL = offset(JB_12, { dy: OFFSET });
export const JC_05 = offset(JY_17, { dx: -OFFSET * 3 });

const ChuoRapidStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-chuo-rapid" />;
};

export const ChuoRapidStops = () => {
    return (
        <>
            <ChuoRapidStop stationCode="JC 01" location={JC_01} />
            <ChuoRapidStop stationCode="JC 02" location={JC_02} />
            <ChuoRapidStop stationCode="JC 03" location={JC_03} />
            <ChuoRapidStop stationCode="JC 04" location={JC_04} />
            <ChuoRapidStop stationCode="JC 05" location={JC_05} />
        </>
    );
};

export const ChuoRapidPath = () => {
    return (
        <SVGPath
            points={[JC_01, JC_03, JC_04, JB_12_CONTROL, JC_05]}
            directions={[NNE, W, SSW, W, N]}
            color="stroke-chuo-rapid"
            radii={{ 1: [RADIUS * 2] }}
        />
    );
};
