import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, OTEMACHI, YAMANOTE_SHIMBASHI } from '../../utils/CommonCoordinates';
import { MAJOR_LINE } from '../../map/GridLines';

const TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET * 4 };
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET * 3 };

const SobuRapid = () => {
    const stops = useStopsFromCSV('/data/jr-east/sobu-rapid.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});


    const tokyoInfo = buildTheseStops(['JO 19'])[0];

    return (
        <g id="sobu-rapid">
            <StopFromTokyo
                location={TOKYO}
                stop={tokyoInfo}
                />
            <StopFromTokyo
                location={SHIMBASHI}
                stop={buildTheseStops(['JO 18'])[0]}
            />
        </g>
    )
}

export default SobuRapid;