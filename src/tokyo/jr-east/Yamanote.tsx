import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, OTEMACHI, YAMANOTE_SHIMBASHI, YAMANOTE_TOKYO } from '../../utils/CommonCoordinates';
import { MAJOR_LINE } from '../../map/GridLines';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET };
const YURAKUCHO = { ...TOKYO, y: TOKYO.y + OFFSET * 4};
const SHIMBASHI = { ...TOKYO, y: OTEMACHI.y + MAJOR_LINE * 3 };

const Yamanote = () => {
    const stops = useStopsFromCSV('/data/jr-east/yamanote.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const tokyoInfo = buildTheseStops(['JY 01'])[0];
    const yurakuchoInfo = buildTheseStops(['JY 30'])[0];

    return (
        <g id="yamanote">
            <StopFromTokyo
                location={YAMANOTE_TOKYO}
                stop={tokyoInfo}
                />
            <StopFromTokyo
                location={YURAKUCHO}
                stop={yurakuchoInfo}
                />
             <StopFromTokyo
                location={YAMANOTE_SHIMBASHI}
                stop={buildTheseStops(['JY 29'])[0]}
                />
        </g>
    )
}

export default Yamanote;