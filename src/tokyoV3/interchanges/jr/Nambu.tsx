import { TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { generateStationCodes } from '../../../utils/StopUtils';
import { Bubaigawara, NAMBU_SLOPE } from './Bubaigawara';
import { Chofu } from './Chofu';
import { JN_26 } from './Chuo';
import { Fuchuhommachi } from './Fuchuhommachi';
import { Inadazutsumi } from './Inadazutsumi';
import { MinamiTama } from './MinamiTama';
import { JN_10, Mizonokuchi } from './Mizonokuchi';
import { MusashiKosugi } from './MusashiKosugi';
import { Noborito } from './Noborito';
import { ShinKawasaki } from './ShinKawasaki';
import { YoyogiUehara } from './YoyogiUehara';

const Nambu = () => {
    return (
        <>
            <Bubaigawara />
            <Fuchuhommachi />
            <MinamiTama />
            <Inadazutsumi />
            <Noborito />
            <Mizonokuchi />
            <MusashiKosugi />
            <ShinKawasaki />
            <LineSegmentWithStepChange
                origin={JN_26}
                slope={NAMBU_SLOPE}
                stops={generateStationCodes('JN', 26, 11)}
                skipBeginning
                strokeColor="stroke-nambu"
                stopsToSkip={['JN 21', 'JN 20', 'JN 19', 'JN 16', 'JN 14', 'JN 10', 'JN 04', 'JN 07']}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                origin={JN_10}
                slope={NAMBU_SLOPE}
                stops={generateStationCodes('JN', 10, 4)}
                skipBeginning
                strokeColor="stroke-nambu"
                stopsToSkip={['JN 21', 'JN 20', 'JN 19', 'JN 16', 'JN 14', 'JN 10', 'JN 04', 'JN 07']}
            />
            <Chofu />
            <YoyogiUehara />
        </>
    );
};

export default Nambu;
