import { Stop } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { offset, S, W, WNW, WSW } from '../../utils/PathUtils';
import { JK_36 } from '../jr-east/KeihinTohoku';
import { I_16 } from '../toei/Mita';
import { CHIYODA_MICHIYA } from '../tokyo-metro/Chiyoda';
import { Y_10 } from '../tokyo-metro/Yurakucho';
import { NT_04 } from './NipponToneri';

const SA_06 = offset(CHIYODA_MICHIYA, { dy: -OFFSET });
const SA_09 = offset(NT_04, { dy: -OFFSET * 0.5, dx: OFFSET });
const SA_16 = offset(JK_36, { dx: OFFSET * 2, dy: -OFFSET });
const SA_20 = offset(I_16, { dy: -OFFSET });
const SA_25 = offset(Y_10, { dx: -OFFSET, dy: OFFSET });

export const SakuraPath = () => {
    return <SVGPath points={[SA_06, SA_16, SA_20, SA_25]} directions={[WNW, W, WSW, S]} />;
};

const Sakura = () => {
    return (
        <>
            <Stop stationCode="SA 06" location={SA_06} />
            <Stop stationCode="SA 09" location={SA_09} />
            <Stop stationCode="SA 16" location={SA_16} />
            <Stop stationCode="SA 20" location={SA_20} />
        </>
    );
};

export default Sakura;
