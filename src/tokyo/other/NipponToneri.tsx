import { MAJOR_LINE, MINOR_LINE } from '../../map/GridLines';
import { Stop } from '../../symbols/BasicStop';
import { LineSegmentWithEndpoint } from '../../symbols/LineSegment';
import SVGPath from '../../symbols/SVGPath';
import { OFFSET } from '../../utils/CommonCoordinates';
import { N, NNE, offset, scale, WNW } from '../../utils/PathUtils';
import { generateStationCodes } from '../../utils/StopUtils';
import { JK_36 } from '../jr-east/KeihinTohoku';
import { YAMANOTE_NIPPORI, YAMANOTE_NISHI_NIPPORI } from '../jr-east/Yamanote';
import { SR_21, SR_25 } from '../tokyo-metro/Namboku';

const NT_01 = offset(YAMANOTE_NIPPORI, scale(NNE, OFFSET * 2));
const NT_02 = offset(YAMANOTE_NISHI_NIPPORI, scale(NNE, OFFSET * 2));
export const NT_03 = { x: SR_25.x, y: NT_02.y - MAJOR_LINE * 0.5 - OFFSET };
const NT_04 = { x: NT_03.x, y: JK_36.y - MINOR_LINE };
const NT_13 = { x: NT_03.x, y: SR_21.y };

export const NipponToneriPath = () => {
    return <SVGPath points={[NT_01, NT_13]} directions={[WNW, N]} />;
};

const NipponToneri = () => {
    return (
        <g className="nippon-toneri">
            <Stop stationCode="NT 01" location={NT_01} />
            <Stop stationCode="NT 02" location={NT_02} />
            <Stop stationCode="NT 03" location={NT_03} />
            <LineSegmentWithEndpoint stops={generateStationCodes('NT', 4, 13)} origin={NT_04} endpoint={NT_13} />
        </g>
    );
};

export default NipponToneri;
