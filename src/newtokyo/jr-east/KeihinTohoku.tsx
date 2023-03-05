import { Stop, StopDefinition } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { ESE, offset, scale } from '../../utils/PathUtils';
import { JY_01, JY_02, JY_03 } from './Yamanote';

export const JK_26 = offset(JY_01, scale(ESE, OFFSET));
export const JK_27 = offset(JY_02, scale(ESE, OFFSET));
export const JK_28 = offset(JY_03, scale(ESE, OFFSET));

const KeihinTohokuStop = ({ stationCode, location }: StopDefinition) => {
    return <Stop stationCode={stationCode} location={location} strokeColor="stroke-keihin-tohoku" />;
};

export const KeihinTohokuStops = () => {
    return (
        <>
            <KeihinTohokuStop stationCode="JK 26" location={JK_26} />
            <KeihinTohokuStop stationCode="JK 27" location={JK_27} />
            <KeihinTohokuStop stationCode="JK 28" location={JK_28} />
        </>
    );
};

export const KeihinTohokuPath = () => {
    return <SVGPath points={[JK_26, JK_28]} color="stroke-keihin-tohoku" />;
};
