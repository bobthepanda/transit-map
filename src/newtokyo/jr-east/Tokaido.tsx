import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, ESE, NE, NNE, NNW, RADIUS, SE, SSE, SSW, W, WSW, midPoint, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_12, JK_16, JK_17, JK_35, JK_36, JK_38, JK_43, JK_46, JK_47 } from './KeihinTohoku';
import { JY_01, JY_05, JY_25, JY_28, JY_29 } from './Yamanote';

const YAMANOTE_OFFSET = scale(ESE, OFFSET * 2);
const TOHOKU_OFFSET = scale(WSW, OFFSET);
export const JU_01 = offset(JY_01, YAMANOTE_OFFSET, scale(NNE, OFFSET * 0.5));
export const JU_02 = offset(JY_05, YAMANOTE_OFFSET);
export const JU_03 = offset(JK_35, scaleToUnitX(ENE, MAJOR_LINE));
export const JU_04 = offset(JK_38, TOHOKU_OFFSET);
export const JU_05 = offset(JK_43, TOHOKU_OFFSET);
export const JU_06 = offset(JK_46, TOHOKU_OFFSET);
export const JU_07 = offset(JK_47, TOHOKU_OFFSET);

export const JT_01 = offset(JU_01, scale(SSW, OFFSET));
export const JT_02 = offset(JY_29, YAMANOTE_OFFSET);
export const JT_03 = offset(JY_25, YAMANOTE_OFFSET);
export const JT_04 = offset(JK_16, scale(SSE, OFFSET));
export const JT_05 = offset(JK_12, scale(SSE, OFFSET));

const TokaidoStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-tokaido" />;
};

export const TokaidoStops = () => {
    return (
        <>
            <TokaidoStop stationCode="JU 01" location={JU_01} />
            <TokaidoStop stationCode="JU 02" location={JU_02} />
            <TokaidoStop stationCode="JU 03" location={JU_03} />
            <TokaidoStop stationCode="JU 04" location={JU_04} />
            <TokaidoStop stationCode="JU 05" location={JU_05} />
            <TokaidoStop stationCode="JU 06" location={JU_06} />
            <TokaidoStop stationCode="JU 07" location={JU_07} />

            <TokaidoStop stationCode="JT 01" location={JT_01} />
            <TokaidoStop stationCode="JT 02" location={JT_02} />
            <TokaidoStop stationCode="JT 03" location={JT_03} />
            <TokaidoStop stationCode="JT 04" location={JT_04} />
            <TokaidoStop stationCode="JT 05" location={JT_05} />
        </>
    );
};

export const TokaidoPath = () => {
    return (
        <SVGPath
            points={[
                JT_05,
                offset(JK_17, scale(SE, OFFSET)),
                JT_03,
                offset(JY_28, scale(SSE, OFFSET * 2)),
                JU_02,
                JU_03,
                midPoint(JU_03, JK_36),
                JU_07,
            ]}
            directions={[ENE, NE, NNE, ENE, NNE, NNW, W, NNW]}
            radii={{ 1: RADIUS + OFFSET * 0.5 }}
            color="stroke-tokaido"
        />
    );
};
