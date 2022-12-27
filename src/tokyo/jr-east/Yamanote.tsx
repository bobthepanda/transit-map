import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, OTEMACHI, RAPID_OCHANOMIZU, YAMANOTE_SHIMBASHI, YAMANOTE_TOKYO } from '../../utils/CommonCoordinates';
import { MAJOR_LINE } from '../../map/GridLines';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET };
const YURAKUCHO = { ...TOKYO, y: TOKYO.y + OFFSET * 4};
const SHIMBASHI = { ...TOKYO, y: OTEMACHI.y + MAJOR_LINE * 3 };

const Yamanote = () => {
    const stops = useStopsFromCSV('/data/jr-east/yamanote.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const buildSingleStop = (id) => buildTheseStops([id])[0];

    const tokyoInfo = buildTheseStops(['JY 01'])[0];
    const yurakuchoInfo = buildTheseStops(['JY 30'])[0];

    return (
        <g id="yamanote">
            <StopFromTokyo
                location={YAMANOTE_TOKYO}
                stop={buildSingleStop('JY 01')}
                />
            <StopFromTokyo
                location={YURAKUCHO}
                stop={buildSingleStop('JY 30')}
                />
             <StopFromTokyo
                location={YAMANOTE_SHIMBASHI}
                stop={buildSingleStop('JY 29')}
                />
            <StopFromTokyo
                location={{x : YAMANOTE_TOKYO.x, y: RAPID_OCHANOMIZU.y}}
                stop={buildSingleStop('JY 03')}
            />
            <StopFromTokyo
                location={{x: YAMANOTE_TOKYO.x, y: OTEMACHI.y - OFFSET * 3}}
                stop={buildSingleStop('JY 02')}
            />
        </g>
    )
}

export default Yamanote;