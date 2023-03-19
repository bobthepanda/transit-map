import { Stop } from '../../symbols/BasicStop';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { offset } from '../../utils/PathUtils';
import { DT_27 } from '../tokyu/DenEnToshi';
import { OH_28 } from './Odawara';

const THIS_OH_28 = offset(OH_28, { dx: -OFFSET * 0.5, dy: OFFSET });
const OE_02 = offset(DT_27, { dx: -OFFSET * 0.5, dy: OFFSET });

export const EnoshimaStops = () => {
    return (
        <>
            <Stop stationCode="OH 28" location={THIS_OH_28} />
            <Stop stationCode="OE 02" location={OE_02} />
        </>
    );
};

export const EnoshimaPath = () => {
    return <SVGPath points={[THIS_OH_28, OE_02]} />;
};
