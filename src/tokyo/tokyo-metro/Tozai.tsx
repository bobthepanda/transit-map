import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { LineSegmentWithEndpoint, LineSegmentWithStepChange } from '../../symbols/LineSegment';
import { OTEMACHI, OFFSET, NIHOMBASHI, OEDO_MONZEN_NAKACHO, SOBU_KINSCHICHO } from '../../utils/CommonCoordinates';
import { startAtLocation, offset, generatePoint, ENE, curveFrom, E, N } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { CS_NISHI_FUNABASHI } from '../jr-east/ChuoSobu';
import StopFromTokyo from '../StopsFromTokyo';

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

const Tozai = () => {
    return (
        <g className="tozai">
            <path
                d={`
                ${startAtLocation(TOZAI_OTEMACHI)}
                ${curveFrom({ start: TOZAI_OTEMACHI, end: TOYOCHO, firstDirection: E, secondDirection: ENE })}
                ${curveFrom({ start: TOYOCHO, end: BARAKI_NAKAYAMA, firstDirection: ENE, secondDirection: N })}
                ${curveFrom({ start: BARAKI_NAKAYAMA, end: TOZAI_NISHI_FUNABASHI, firstDirection: N, secondDirection: ENE })}
            `}
            />
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
