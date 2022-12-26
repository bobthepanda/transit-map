import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO } from '../../utils/CommonCoordinates';

const ChuoTokyo = () => {
    const stops = useStopsFromCSV('/data/jr-east/chuo-rapid.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const tokyoInfo = buildTheseStops(['JC 01'])[0];

    return (
        <g id="chuo-rapid">
            <StopFromTokyo
                location={CHUO_TOKYO}
                stop={tokyoInfo}
                />
        </g>
    )
}

export default ChuoTokyo;