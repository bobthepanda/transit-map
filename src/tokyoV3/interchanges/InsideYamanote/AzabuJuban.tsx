import { Stop, TextAlignment } from '../../../symbols/BasicStop';
import { OFFSET } from '../../../utils/CommonCoordinates';
import { NW, SE, SW, W, findIntersectionFromSlopes, offset, scaleToUnitX } from '../../../utils/PathUtils';
import { E_20 } from './Hamamatsucho';
import { N_06 } from './TameikeSanno';

const AZABU_JUBAN_INTERSECTION = findIntersectionFromSlopes({ start: E_20, firstDirection: NW, secondDirection: SW, end: N_06 });

export const E_22 = offset(AZABU_JUBAN_INTERSECTION, scaleToUnitX(SE, OFFSET * 0.5));
export const N_04 = offset(E_22, scaleToUnitX(W, OFFSET));
export const AzabuJuban = () => {
    return (
        <>
            <Stop
                stationCode="E 21"
                location={offset(E_22, scaleToUnitX(SE, OFFSET * 4))}
                strokeColor="stroke-oedo"
                textAlignment={TextAlignment.SW}
            />
            <g id="azabu-juban">
                <Stop stationCode="N 04" location={N_04} strokeColor="stroke-namboku" textAlignment={TextAlignment.NW} />
                <Stop stationCode="E 22" location={E_22} strokeColor="stroke-oedo" hideText />
            </g>
        </>
    );
};
