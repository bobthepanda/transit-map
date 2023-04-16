import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { offset, RADIUS, S, scale, SE, SSE, SW, W, WSW } from '../../utils/PathUtils';
import { JU_04, JU_07 } from './Tokaido';
import { JY_13, JY_17, JY_20, JY_21, JY_24 } from './Yamanote';

const SaikyoStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-saikyo" />;
};

export const JA_08 = offset(JY_24, scale(SW, OFFSET * 2));
export const JA_09 = offset(JY_21, scale(SW, OFFSET * 2));
export const JA_10 = offset(JY_20, scale(W, OFFSET * 2));
export const JA_11 = offset(JY_17, scale(W, OFFSET * 2));
export const JA_12 = offset(JY_13, scale(W, OFFSET * 2));
export const JA_15 = offset(JU_04, scale(WSW, OFFSET * 2));
export const JA_26 = offset(JU_07, scale(WSW, OFFSET * 2));
export const JA_13 = offset(JA_12, { dx: MAJOR_LINE + MINOR_LINE, dy: -MAJOR_LINE * 2.5 });

export const SaikyoStops = () => {
    return (
        <>
            <SaikyoStop stationCode="JA 08" location={JA_08} />
            <SaikyoStop stationCode="JA 09" location={JA_09} />
            <SaikyoStop stationCode="JA 10" location={JA_10} />
            <SaikyoStop stationCode="JA 11" location={JA_11} />
            <SaikyoStop stationCode="JA 12" location={JA_12} />
            <SaikyoStop stationCode="JA 13" location={JA_13} />
            <SaikyoStop stationCode="JA 15" location={JA_15} />
            <SaikyoStop stationCode="JA 26" location={JA_26} />
        </>
    );
};

export const SaikyoPath = () => {
    return (
        <SVGPath
            points={[JA_26, JA_13, JA_10, JA_08]}
            directions={[SSE, WSW, S, SE]}
            radii={{ 1: RADIUS + OFFSET * 0.5 }}
            color="stroke-saikyo"
        />
    );
};
