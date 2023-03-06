import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, NNE, offset, RADIUS, scale, SSW } from '../../utils/PathUtils';
import { JY_01, JY_05 } from './Yamanote';

export const JU_01 = offset(JY_01, scale(ESE, OFFSET * 2), scale(NNE, OFFSET * 0.5));
export const JT_01 = offset(JU_01, scale(SSW, OFFSET));
export const JU_02 = offset(JY_05, scale(ESE, OFFSET * 2));

const TokaidoStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-tokaido" />;
};

export const TokaidoStops = () => {
    return (
        <>
            <TokaidoStop stationCode="JU 01" location={JU_01} />
            <TokaidoStop stationCode="JT 01" location={JT_01} />
            <TokaidoStop stationCode="JU 02" location={JU_02} />
        </>
    );
};

export const TokaidoPath = () => {
    return <SVGPath points={[JT_01, JU_02]} radii={{ 1: RADIUS + OFFSET * 0.5 }} color="stroke-tokaido" />;
};
