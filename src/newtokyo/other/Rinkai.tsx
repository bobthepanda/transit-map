import { Stop } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { offset, S, scale, SE, SW } from '../../utils/PathUtils';
import { JK_19 } from '../jr-east/KeihinTohoku';
import { JA_08 } from '../jr-east/Saikyo';

const R_08 = offset(JA_08, scale(SW, OFFSET));
export const R_07 = offset(JK_19, { dx: -OFFSET });

export const RinkaiStops = () => {
    return (
        <>
            <Stop stationCode="R 08" location={R_08} />
            <Stop stationCode="R 07" location={R_07} />
        </>
    );
};

export const RinkaiPath = () => {
    return <SVGPath points={[R_08, R_07]} directions={[S, SE]} />;
};
