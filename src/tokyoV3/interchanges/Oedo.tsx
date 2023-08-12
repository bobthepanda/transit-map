import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop, TextAlignment } from '../../symbols/BasicStop';
import { OFFSET } from '../../utils/CommonCoordinates';
import { S, offset, scaleToUnitX } from '../../utils/PathUtils';
import { JB_08 } from './Chuo';
import { M_06, M_07 } from './Marunouchi';

export const E_28_N = offset(M_07, scaleToUnitX(S, OFFSET * 3));
export const E_28 = offset(E_28_N, { dy: OFFSET });
export const E_30 = offset(M_06, { dx: OFFSET * 0.5, dy: -OFFSET });
export const E_31 = offset(JB_08, { dx: OFFSET * 0.5, dy: -OFFSET });
export const E_29 = offset(E_30, { dy: MAJOR_LINE * 0.5 + MINOR_LINE });
export const E_01 = offset(E_28_N, { dx: MAJOR_LINE - OFFSET, dy: -OFFSET });

const Oedo = () => {
    return (
        <>
            <Stop location={E_28_N} stationCode="E 28" strokeColor="stroke-oedo" textAlignment={TextAlignment.UP} />
            <Stop location={E_28} stationCode="E 28" strokeColor="stroke-oedo" hideText />
            <Stop location={E_29} stationCode="E 29" strokeColor="stroke-oedo" textAlignment={TextAlignment.LEFT} />
            <Stop location={E_30} stationCode="E 30" strokeColor="stroke-oedo" textAlignment={TextAlignment.LEFT} />
            <Stop location={E_31} stationCode="E 31" strokeColor="stroke-oedo" textAlignment={TextAlignment.LEFT} />
            <Stop location={E_01} stationCode="E 01" strokeColor="stroke-oedo" hideText />
        </>
    );
};

export default Oedo;
