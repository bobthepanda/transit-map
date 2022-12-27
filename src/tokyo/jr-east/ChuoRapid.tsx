import { buildStops, useStopsFromCSV } from '../../utils/StopUtils';
import { StopFromTokyo } from '../StopsFromTokyo';
import { CHUO_TOKYO, RAPID_OCHANOMIZU } from '../../utils/CommonCoordinates';

const ChuoTokyo = () => {
    const stops = useStopsFromCSV('/data/jr-east/chuo-rapid.csv');

    const buildTheseStops = (ids) => buildStops({ids, stops});

    const buildSingleStop = (id) => buildTheseStops([id])[0];

    const tokyoInfo = buildSingleStop('JC 01');

    return (
        <g id="chuo-rapid">
            <StopFromTokyo
                location={CHUO_TOKYO}
                stop={tokyoInfo}
                />
            <StopFromTokyo
                location={RAPID_OCHANOMIZU}
                stop={buildSingleStop('JC 03')}
                />
        </g>
    )
}

export default ChuoTokyo;