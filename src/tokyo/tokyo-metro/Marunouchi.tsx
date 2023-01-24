import { MAJOR_LINE } from '../../map/GridLines';
import { Stop, StopDefinition, TextAlignment } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import {
    CHUO_OCHANOMIZU,
    HIBIYA_GINZA,
    HIBIYA_KASUMIGASEKI,
    MARUNOUCHI_OTEMACHI,
    MITA_HIBIYA,
    OFFSET,
    YAMANOTE_TOKYO,
} from '../../utils/CommonCoordinates';
import { E, ESE, generatePoint, offset, S, W, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JB_14 } from '../jr-east/ChuoSobu';
import { JY_13, JY_17 } from '../jr-east/Yamanote';
import { E_07, E_08 } from '../toei/Oedo';
import { F_13 } from './Fukutoshin';

const TOKYO = offset(YAMANOTE_TOKYO, { dx: OFFSET, dy: OFFSET });
const GINZA = { x: HIBIYA_GINZA.x - OFFSET * 0.5, y: MITA_HIBIYA.y };
const KASUMIGASEKI = offset(HIBIYA_KASUMIGASEKI, { dx: -OFFSET, dy: -OFFSET * 0.5 });

const OCHANOMIZU = offset(CHUO_OCHANOMIZU, { dy: OFFSET * -2 });
export const M_21 = generatePoint({ start: OCHANOMIZU, slope: WNW, endReference: E_08 });
export const M_22 = offset(M_21, { dx: -MAJOR_LINE * 2 - OFFSET, dy: -MAJOR_LINE - OFFSET * 0.5 });
const M_12 = offset(JB_14, { dx: -OFFSET * 2 });
export const M_14 = offset(KASUMIGASEKI, { dx: -MAJOR_LINE });
export const M_13 = generatePoint({ start: M_12, slope: ESE, endReference: offset(E_07, { dx: OFFSET * -2 }) });
const M_09 = offset(F_13, { dx: OFFSET * 0.5, dy: OFFSET });
const M_25 = offset(JY_13, { dy: OFFSET });
export const M_08 = offset(JY_17, { dx: -OFFSET, dy: OFFSET });

export const MarunouchiPath = () => {
    return (
        <SVGPath
            color="stroke-marunouchi"
            points={[M_25, M_22, MARUNOUCHI_OTEMACHI, TOKYO, GINZA, KASUMIGASEKI, M_12, M_08]}
            directions={[E, ESE, S, E, S, W, WNW, W]}
        />
    );
};

const MarunouchiStop = ({ location, stationCode, textAlignment }: StopDefinition) => {
    return <Stop location={location} stationCode={stationCode} textAlignment={textAlignment} strokeColor="stroke-marunouchi" />;
};

const Marunouchi = () => {
    return (
        <g className="marunouchi">
            <MarunouchiPath />
            <MarunouchiStop stationCode="M 08" location={M_08} />
            <MarunouchiStop stationCode="M 09" location={M_09} />
            <MarunouchiStop
                stationCode="M 10"
                location={generatePoint({ start: M_12, slope: WNW, endReference: offset(M_12, { dx: -MAJOR_LINE * 2 }) })}
            />
            <MarunouchiStop
                stationCode="M 11"
                location={generatePoint({ start: M_12, slope: WNW, endReference: offset(M_12, { dx: -MAJOR_LINE }) })}
            />
            <MarunouchiStop stationCode="M 12" location={M_12} />
            <MarunouchiStop stationCode="M 13" location={M_13} />
            <MarunouchiStop stationCode="M 14" location={M_14} />
            <MarunouchiStop stationCode="M 18" location={MARUNOUCHI_OTEMACHI} />
            <MarunouchiStop stationCode="M 19" location={offset(MARUNOUCHI_OTEMACHI, { dy: -MAJOR_LINE * 2 + OFFSET * 1.5 })} />
            <MarunouchiStop location={TOKYO} stationCode="M 17" />
            <MarunouchiStop location={GINZA} stationCode="M 16" />
            <MarunouchiStop location={KASUMIGASEKI} stationCode="M 15" textAlignment={TextAlignment.UP} />
            <MarunouchiStop stationCode="M 20" location={OCHANOMIZU} textAlignment={TextAlignment.UP} />
            <MarunouchiStop stationCode="M 21" location={M_21} />
            <LineSegmentWithEndpoint
                stops={generateStationCodes('M', 22, 24)}
                origin={M_22}
                endpoint={generatePoint({ start: M_22, slope: WNW, endReference: offset(M_22, { dx: -OFFSET * 2 - MAJOR_LINE * 3 }) })}
                strokeColor="stroke-marunouchi"
            />
            <MarunouchiStop stationCode="M 25" location={M_25} />
        </g>
    );
};

export default Marunouchi;
