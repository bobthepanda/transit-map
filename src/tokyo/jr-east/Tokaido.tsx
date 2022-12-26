import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO, OFFSET, OTEMACHI, YAMANOTE_SHIMBASHI } from '../../utils/CommonCoordinates';
import { MAJOR_LINE } from '../../map/GridLines';

const TOKYO = { x: CHUO_TOKYO.x + OFFSET * 3, y: CHUO_TOKYO.y + OFFSET * .5 };
const SHIMBASHI = { ...YAMANOTE_SHIMBASHI, x: YAMANOTE_SHIMBASHI.x + OFFSET * 2 };


const Tokaido = () => {
    const stops = useStopsFromCSV('/data/jr-east/tokaido.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});


    const tokyoInfo = buildTheseStops(['JT 01'])[0];

    return (
        <g id="tokaido">
            <StopFromTokyo
                location={TOKYO}
                stop={tokyoInfo}
                />
             <StopFromTokyo
                location={SHIMBASHI}
                stop={buildTheseStops(['JT 02'])[0]}
                />
        </g>
    )
}

export default Tokaido;