import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, ESE, NE, NNE, NW, S, SE, SSE, WSW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { A_15 } from '../toei/Asakusa';
import { MG_11 } from '../tokyu/Meguro';
import { JB_22 } from './ChuoSobu';
import { JK_15, JK_19 } from './KeihinTohoku';
import { JT_05 } from './Tokaido';
import { JY_01, JY_25, JY_28, JY_29 } from './Yamanote';

const YAMANOTE_OFFSET = scale(ESE, OFFSET * 3);

export const JO_19 = offset(JY_01, YAMANOTE_OFFSET);
export const JO_21 = offset(A_15, { dx: -OFFSET, dy: -OFFSET * 2 });
export const JO_22 = offset(JB_22, scaleToUnitX(S, OFFSET));
export const JO_18 = offset(JY_29, YAMANOTE_OFFSET);
export const JO_17 = offset(JY_25, YAMANOTE_OFFSET);
export const JO_16 = offset(JK_19, { dx: -MAJOR_LINE * 1.5, dy: MAJOR_LINE * 0.25 });
export const JO_15 = offset(MG_11, scale(SE, OFFSET * 3));
export const JO_13 = offset(JT_05, scale(SSE, OFFSET * 2));
export const JO_14 = offset(JK_15, { dy: -MAJOR_LINE }, scale(NW, OFFSET * 8.5));

const SobuRapidStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-sobu-rapid" />;
};

export const SobuRapidStops = () => {
    return (
        <>
            <SobuRapidStop stationCode="JO 13" location={JO_13} />
            <SobuRapidStop stationCode="JO 14" location={JO_14} />
            <SobuRapidStop stationCode="JO 15" location={JO_15} />
            <SobuRapidStop stationCode="JO 16" location={JO_16} />
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
            points={[
                JO_13,
                JO_14,
                JO_15,
                JO_16,
                offset(JK_19, scale(SE, OFFSET * 2), scaleToUnitX(NE, OFFSET)),
                JO_17,
                offset(JY_28, scale(SSE, OFFSET * 3)),
                JO_19,
                JO_21,
                JO_22,
            ]}
            directions={[ENE, NW, NE, E, NE, NNE, ENE, NNE, ENE, E]}
            color="stroke-sobu-rapid"
        />
    );
};
