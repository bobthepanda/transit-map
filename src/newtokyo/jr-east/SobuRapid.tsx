import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, NNE, offset, S, scale, scaleToUnitX, SSE, WSW } from '../../utils/PathUtils';
import { A_15 } from '../toei/Asakusa';
import { MG_11 } from '../tokyu/Meguro';
import { JB_22 } from './ChuoSobu';
import { JY_01, JY_25, JY_28, JY_29 } from './Yamanote';

const YAMANOTE_OFFSET = scale(ESE, OFFSET * 3);

export const JO_19 = offset(JY_01, YAMANOTE_OFFSET);
export const JO_21 = offset(A_15, { dx: -OFFSET, dy: -OFFSET * 2 });
export const JO_22 = offset(JB_22, scaleToUnitX(S, OFFSET));
export const JO_18 = offset(JY_29, YAMANOTE_OFFSET);
export const JO_17 = offset(JY_25, YAMANOTE_OFFSET);
export const JO_15 = offset(MG_11, scale(ESE, OFFSET * 3));

const SobuRapidStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-sobu-rapid" />;
};

export const SobuRapidStops = () => {
    return (
        <>
            <SobuRapidStop stationCode="JO 15" location={JO_15} />
            <SobuRapidStop stationCode="JO 17" location={JO_17} />
            <SobuRapidStop stationCode="JO 18" location={JO_18} />
            <SobuRapidStop stationCode="JO 19" location={JO_19} />
            <SobuRapidStop stationCode="JO 20" location={offset(JO_21, scaleToUnitX(WSW, MAJOR_LINE * 1.5))} />
            <SobuRapidStop stationCode="JO 21" location={JO_21} />
            <SobuRapidStop stationCode="JO 22" location={JO_22} />
        </>
    );
};

export const SobuRapidPath = () => {
    return (
        <SVGPath
            points={[JO_17, offset(JY_28, scale(SSE, OFFSET * 3)), JO_19, JO_21, JO_22]}
            directions={[NNE, ENE, NNE, ENE, E]}
            color="stroke-sobu-rapid"
        />
    );
};
