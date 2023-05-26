import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NNW, NW, RADIUS, S, SE, SSE, SW, W, WSW, offset, scale, scaleToUnitX } from '../../utils/PathUtils';
import { JK_19 } from './KeihinTohoku';
import { JO_09, JO_13, JO_14, JO_15, JO_16 } from './SobuRapid';
import { JU_04, JU_05, JU_07 } from './Tokaido';
import { JY_10, JY_12, JY_13, JY_17, JY_20, JY_21, JY_24 } from './Yamanote';

const ShonanShinjukuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-shonan-shinjuku" />;
};

export const JS_17 = offset(JY_24, scale(SW, OFFSET));
export const JS_18 = offset(JY_21, scale(SW, OFFSET));
export const JS_19 = offset(JY_20, scale(W, OFFSET));
export const JS_20 = offset(JY_17, scale(W, OFFSET));
export const JS_21 = offset(JY_13, scale(W, OFFSET));
export const JS_22 = offset(JU_04, scale(WSW, OFFSET));
export const JS_23 = offset(JU_05, scale(WSW, OFFSET));
export const JS_24 = offset(JU_07, scale(WSW, OFFSET));
export const OIMACHI_CURVE = offset(JK_19, scaleToUnitX(NW, OFFSET * 2));
export const JS_16 = offset(JO_16, scale(N, OFFSET));
export const JS_15 = offset(JO_15, scale(NW, OFFSET));
export const JS_14 = offset(JO_14, scale(SW, OFFSET));
export const JS_13 = offset(JO_13, scale(NNW, OFFSET));
export const JS_09 = offset(JO_09, { dx: -OFFSET });

export const ShonanShinjukuStops = () => {
    return (
        <>
            <ShonanShinjukuStop stationCode="JS 09" location={JS_09} />
            <ShonanShinjukuStop stationCode="JS 13" location={JS_13} />
            <ShonanShinjukuStop stationCode="JS 14" location={JS_14} />
            <ShonanShinjukuStop stationCode="JS 15" location={JS_15} />
            <ShonanShinjukuStop stationCode="JS 16" location={JS_16} />
            <ShonanShinjukuStop stationCode="JS 17" location={JS_17} />
            <ShonanShinjukuStop stationCode="JS 18" location={JS_18} />
            <ShonanShinjukuStop stationCode="JS 19" location={JS_19} />
            <ShonanShinjukuStop stationCode="JS 20" location={JS_20} />
            <ShonanShinjukuStop stationCode="JS 21" location={JS_21} />
            <ShonanShinjukuStop stationCode="JS 22" location={JS_22} />
            <ShonanShinjukuStop stationCode="JS 23" location={JS_23} />
            <ShonanShinjukuStop stationCode="JS 24" location={JS_24} />
        </>
    );
};

export const ShonanShinjukuPath = () => {
    return (
        <SVGPath
            points={[
                JS_24,
                offset(JY_10, scale(NNW, OFFSET)),
                offset(JY_12, scale(N, OFFSET)),
                JS_19,
                JS_17,
                OIMACHI_CURVE,
                JS_16,
                JS_15,
                JS_14,
                JS_13,
                JS_09,
            ]}
            directions={[SSE, WSW, W, S, SE, SW, W, SW, SE, WSW, S]}
            radii={{ 1: RADIUS + OFFSET * 0.5 }}
            color="stroke-shonan-shinjuku"
        />
    );
};
