import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OTEMACHI, OFFSET, NIHOMBASHI, OEDO_MONZEN_NAKACHO, SOBU_KINSCHICHO } from '../../utils/CommonCoordinates';
import { startAtLocation, offset, generatePoint, ENE, curveFrom, E, N, ESE, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_NISHI_FUNABASHI, JB_16 } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';
import { I_10 } from '../toei/Mita';

const TOZAI_OTEMACHI = {
    x: OTEMACHI.x + MAJOR_LINE * 0.5 + MINOR_LINE,
    y: NIHOMBASHI.y + OFFSET,
};
const TOZAI_NIHOMBASHI = {
    x: NIHOMBASHI.x + MAJOR_LINE * 0.5,
    y: TOZAI_OTEMACHI.y,
};
const TOZAI_KAYABACHO = {
    ...TOZAI_NIHOMBASHI,
    x: TOZAI_NIHOMBASHI.x + MAJOR_LINE * 1.5 + OFFSET * 0.5,
};
const TOZAI_MONZEN_NAKACHO = { y: TOZAI_KAYABACHO.y, x: OEDO_MONZEN_NAKACHO.x + OFFSET * 0.5 };
const TOZAI_NISHI_FUNABASHI = offset(CS_NISHI_FUNABASHI, { dx: -OFFSET * 0.5, dy: OFFSET });
const BARAKI_NAKAYAMA = offset(CS_NISHI_FUNABASHI, { dx: -MAJOR_LINE, dy: MAJOR_LINE });
const TOZAI_URAYASU = offset(CS_NISHI_FUNABASHI, { dx: -MAJOR_LINE, dy: OFFSET + ((MAJOR_LINE * 2) / 3) * 5 });
const KIBA = offset(TOZAI_MONZEN_NAKACHO, { dx: MAJOR_LINE, dy: -OFFSET * 2 });
const TOYOCHO = generatePoint({ start: KIBA, slope: ENE, endReference: offset(SOBU_KINSCHICHO, { dx: OFFSET }) });
export const T_07 = offset(offset(I_10, { dx: -MAJOR_LINE * 2 + OFFSET * 1.5, dy: MAJOR_LINE * 0.5 + OFFSET + OFFSET * 0.75 }), {});
const T_06 = generatePoint({ start: T_07, slope: WNW, endReference: offset(JB_16, { dx: -OFFSET * 4 }) });
export const TozaiPath = () => {
    return (
        <path
            d={`
                ${startAtLocation(T_06)}
                ${curveFrom({ start: T_06, end: TOZAI_OTEMACHI, firstDirection: ESE, secondDirection: E })}
                ${curveFrom({ start: TOZAI_OTEMACHI, end: TOYOCHO, firstDirection: E, secondDirection: ENE })}
                ${curveFrom({ start: TOYOCHO, end: BARAKI_NAKAYAMA, firstDirection: ENE, secondDirection: N })}
                ${curveFrom({ start: BARAKI_NAKAYAMA, end: TOZAI_NISHI_FUNABASHI, firstDirection: N, secondDirection: ENE })}
            `}
        />
    );
};

const Tozai = () => {
    return (
        <g className="tozai">
            <TozaiPath />
            <StopFromTokyo stationCode="T 06" location={T_06} />
            <StopFromTokyo stationCode="T 07" location={T_07} />
            <StopFromTokyo stationCode="T 08" location={offset(T_07, { dx: MAJOR_LINE, dy: MAJOR_LINE * 0.5 })} />
            <StopFromTokyo location={TOZAI_NIHOMBASHI} stationCode="T 10" />
            <StopFromTokyo location={TOZAI_OTEMACHI} stationCode="T 09" />
            <StopFromTokyo location={TOZAI_KAYABACHO} stationCode="T 11" />
            <LineSegmentWithStepChange origin={BARAKI_NAKAYAMA} stops={generateStationCodes('T', 22, 19)} ystep={MAJOR_LINE - OFFSET * 2} />
            <StopFromTokyo location={TOZAI_NISHI_FUNABASHI} stationCode="T 23" />
            <StopFromTokyo location={KIBA} stationCode="T 13" />
            <LineSegmentWithEndpoint
                origin={TOYOCHO}
                endpoint={generatePoint({ start: TOYOCHO, slope: ENE, endReference: offset(TOZAI_URAYASU, { dx: (-MAJOR_LINE * 2) / 3 }) })}
                stops={generateStationCodes('T', 14, 18)}
            />
            <StopFromTokyo stationCode="T 12" location={TOZAI_MONZEN_NAKACHO} />
        </g>
    );
};

export default Tozai;
