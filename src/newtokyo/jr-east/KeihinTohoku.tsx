import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ENE, ESE, NNE, NNW, offset, RADIUS, scale } from '../../utils/PathUtils';
import { JY_01, JY_02, JY_03, JY_04, JY_05, JY_06, JY_07, JY_08 } from './Yamanote';

export const JK_26 = offset(JY_01, scale(ESE, OFFSET));
export const JK_27 = offset(JY_02, scale(ESE, OFFSET));
export const JK_28 = offset(JY_03, scale(ESE, OFFSET));
export const JK_29 = offset(JY_04, scale(ESE, OFFSET));
export const JK_30 = offset(JY_05, scale(ESE, OFFSET));
export const JK_31 = offset(JY_06, scale(ENE, OFFSET));
export const JK_32 = offset(JY_07, scale(ENE, OFFSET));
export const JK_33 = offset(JY_08, scale(ENE, OFFSET));

const KeihinTohokuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-keihin-tohoku" />;
};

export const KeihinTohokuStops = () => {
    return (
        <>
            <KeihinTohokuStop stationCode="JK 26" location={JK_26} />
            <KeihinTohokuStop stationCode="JK 27" location={JK_27} />
            <KeihinTohokuStop stationCode="JK 28" location={JK_28} />
            <KeihinTohokuStop stationCode="JK 28" location={JK_28} />
            <KeihinTohokuStop stationCode="JK 29" location={JK_29} />
            <KeihinTohokuStop stationCode="JK 30" location={JK_30} />
            <KeihinTohokuStop stationCode="JK 31" location={JK_31} />
            <KeihinTohokuStop stationCode="JK 32" location={JK_32} />
        </>
    );
};

export const KeihinTohokuPath = () => {
    return (
        <SVGPath points={[JK_26, JK_33]} directions={[NNE, NNW]} radii={{ 1: RADIUS + OFFSET * 0.5 * 2 }} color="stroke-keihin-tohoku" />
    );
};
