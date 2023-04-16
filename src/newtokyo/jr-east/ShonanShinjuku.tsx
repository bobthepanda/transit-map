import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NNW, offset, RADIUS, S, scale, SE, SSE, SW, W, WSW } from '../../utils/PathUtils';
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

export const ShonanShinjukuStops = () => {
    return (
        <>
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
            points={[JS_24, offset(JY_10, scale(NNW, OFFSET)), offset(JY_12, scale(N, OFFSET)), JS_19, JS_17]}
            directions={[SSE, WSW, W, S, SE]}
            radii={{ 1: RADIUS + OFFSET * 0.5 }}
            color="stroke-shonan-shinjuku"
        />
    );
};
