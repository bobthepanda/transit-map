import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, OTEMACHI, YAMANOTE_SHIMBASHI } from '../../utils/CommonCoordinates';
import { MAJOR_LINE } from '../../map/GridLines';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 2 };
const YURAKUCHO = { ...TOKYO, y: TOKYO.y + OFFSET * 4};
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET };

const KeihinTohoku = () => {
    const stops = useStopsFromCSV('/data/jr-east/keihin-tohoku.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});


    const tokyoInfo = buildTheseStops(['JK 26'])[0];
    const yurakuchoInfo = buildTheseStops(['JK 25'])[0];

    return (
        <g id="keihin-tohoku">
            <StopFromTokyo
                location={TOKYO}
                stop={tokyoInfo}
                />
            <StopFromTokyo
                location={YURAKUCHO}
                stop={yurakuchoInfo}
                />
            <StopFromTokyo
                location={SHIMBASHI}
                stop={buildTheseStops(['JK 24'])[0]}
            />
        </g>
    )
}

export default KeihinTohoku;