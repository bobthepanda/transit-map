import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { MINOR_LINE, OFFSET } from '../../utils/CommonCoordinates';
import { E, ENE, midPoint, N, NNE, offset, scale, W, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_14, JB_15, JB_16 } from '../jr-east/ChuoSobu';
import { JK_33, JK_36 } from '../jr-east/KeihinTohoku';
import { JY_10, YAMANOTE_NIPPORI } from '../jr-east/Yamanote';
import { E_22 } from '../toei/Oedo';
import { G_06 } from './Ginza';
import { M_22 } from './Marunouchi';
import { Y_16 } from './Yurakucho';

const N_11 = offset(M_22, { dy: OFFSET });
const N_14 = offset(JY_10, { dy: OFFSET });
const N_10 = offset(JB_16, { dx: -OFFSET * 1 });
const N_13 = offset(offset(YAMANOTE_NIPPORI, scale(NNE, OFFSET)), { dx: OFFSET * 1.5 - MAJOR_LINE * 4 });
const N_09 = offset(JB_15, { dx: OFFSET * -1 });
const N_08 = offset(JB_14, { dx: OFFSET * -1 });
const N_07 = offset(Y_16, { dy: OFFSET });
const N_06 = offset(G_06, { dx: -OFFSET, dy: OFFSET * 0.5 });
const N_04 = offset(E_22, { dy: -OFFSET, dx: -OFFSET * 0.5 });
const N_16 = offset(JK_36, { dx: OFFSET, dy: -OFFSET * 0.5 });

const NAMBOKU_SPACING = -MAJOR_LINE * 0.5;
const N_19 = offset(N_16, { dy: NAMBOKU_SPACING * 3 });
const SR_19 = offset(N_19, { dy: -OFFSET });
export const SR_25 = { x: JK_33.x - MINOR_LINE - OFFSET * 2, y: offset(SR_19, { dy: NAMBOKU_SPACING * 6 }).y };
const SR_26 = offset(SR_25, { dy: NAMBOKU_SPACING - OFFSET });
const SR_22 = offset(SR_19, { dy: NAMBOKU_SPACING * 3 });
export const SR_21 = offset(SR_22, { dy: -NAMBOKU_SPACING });
const SR_24 = offset(SR_25, { dy: -NAMBOKU_SPACING });
const SR_23 = midPoint(SR_22, SR_24);

export const NambokuPath = () => {
    return (
        <SVGPath
            color="stroke-namboku"
            points={[N_04, N_07, N_08, N_11, N_13, N_14, N_19, SR_23, SR_26]}
            directions={[N, W, N, ENE, N, WNW, N, E, N]}
        />
    );
};

const NambokuStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-namboku" />;
};

const Namboku = () => {
    return (
        <g className="namboku">
            <NambokuPath />
            <NambokuStop stationCode="N 04" location={N_04} />
            <NambokuStop stationCode="N 05" location={midPoint(N_04, N_06)} />
            <NambokuStop stationCode="N 06" location={N_06} />
            <NambokuStop stationCode="N 07" location={N_07} />
            <NambokuStop stationCode="N 08" location={N_08} />
            <NambokuStop stationCode="N 09" location={N_09} />
            <NambokuStop stationCode="N 10" location={N_10} />
            <NambokuStop stationCode="N 11" location={N_11} />
            <NambokuStop stationCode="N 12" location={offset(N_13, { dy: MAJOR_LINE })} />
            <NambokuStop stationCode="N 13" location={N_13} />
            <NambokuStop stationCode="N 14" location={N_14} />
            <NambokuStop stationCode="N 15" location={offset(N_16, { dy: MAJOR_LINE - OFFSET })} textAlignment={TextAlignment.LEFT} />
            <LineSegmentWithEndpoint strokeColor="stroke-namboku" stops={generateStationCodes('N', 16, 19)} origin={N_16} endpoint={N_19} />
            <LineSegmentWithEndpoint
                strokeColor="stroke-namboku"
                stops={generateStationCodes('SR', 19, 22)}
                origin={SR_19}
                endpoint={SR_22}
            />
            <NambokuStop stationCode="SR 23" location={SR_23} />
            <NambokuStop stationCode="SR 24" location={SR_24} />
            <NambokuStop stationCode="SR 25" location={SR_25} />
            <NambokuStop stationCode="SR 26" location={SR_26} />
        </g>
    );
};

export default Namboku;
