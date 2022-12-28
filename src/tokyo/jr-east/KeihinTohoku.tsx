import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, OTEMACHI, YAMANOTE_SHIMBASHI, RAPID_OCHANOMIZU, YAMANOTE_YURAKUCHO } from '../../utils/CommonCoordinates';
import { MAJOR_LINE } from '../../map/GridLines';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 2 };
const YURAKUCHO = { ...TOKYO, y: YAMANOTE_YURAKUCHO.y};
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET };

const KeihinTohoku = () => {
    const stops = useStopsFromCSV('/data/jr-east/keihin-tohoku.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const buildSingleStop = (id) => buildTheseStops([id])[0];


    const tokyoInfo = buildTheseStops(['JK 26'])[0];
    const yurakuchoInfo = buildTheseStops(['JK 25'])[0];

    return (
        <g id="keihin-tohoku">
            <StopFromTokyo
                location={TOKYO}
                stop={buildSingleStop('JK 26')}
                />
            <StopFromTokyo
                location={YURAKUCHO}
                stop={buildSingleStop('JK 25')}
                />
            <StopFromTokyo
                location={SHIMBASHI}
                stop={buildSingleStop('JK 24')}
            />
            <StopFromTokyo
                location={{x : TOKYO.x, y: RAPID_OCHANOMIZU.y}}
                stop={buildSingleStop('JK 28')}
            />
            <StopFromTokyo
                location={{x: TOKYO.x, y: OTEMACHI.y - OFFSET * 3}}
                stop={buildSingleStop('JK 27')}
            />
        </g>
    )
}

export default KeihinTohoku;