import { Stop } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { S, SE, offset, scale } from '../../utils/PathUtils';
import { JK_17 } from '../jr-east/KeihinTohoku';
import { MG_09 } from './Meguro';

const TM_01 = offset(MG_09, scale(SE, OFFSET));
const TM_07 = offset(JK_17, { dx: -OFFSET });

export const TamagawaStops = () => {
    return (
        <>
            <Stop stationCode="TM 01" location={TM_01} />
            <Stop stationCode="TM 07" location={TM_07} />
        </>
    );
};

export const TamagawaPath = () => {
    return <SVGPath points={[TM_01, TM_07]} directions={[S, SE]} />;
};
