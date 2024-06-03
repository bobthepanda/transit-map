import { TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { generateStationCodes } from '../../../utils/StopUtils';
import { Bubaigawara, NAMBU_SLOPE } from './Bubaigawara';
import { Chofu } from './Chofu';
import { Fuchuhommachi } from './Fuchuhommachi';
import { Inadazutsumi } from './Inadazutsumi';
import { Meidaimae } from './Meidaimae';
import { MinamiTama } from './MinamiTama';
import { Mizonokuchi } from './Mizonokuchi';
import { JN_07, MusashiKosugi } from './MusashiKosugi';
import { Noborito } from './Noborito';
import { ShimoKitazawa } from './ShimoKitazawa';
import { ShinKawasaki } from './ShinKawasaki';
import { JN_26 } from './Tachikawa';
import { YoyogiUehara } from './YoyogiUehara';

const Nambu = () => {
    return (
        <>
            <Bubaigawara />
            <Fuchuhommachi />
            <MinamiTama />
            <Inadazutsumi />
            <Noborito />
            <ShimoKitazawa />
            <Mizonokuchi />
            <MusashiKosugi />
            <ShinKawasaki />
            <LineSegmentWithStepChange
                origin={JN_26}
                slope={NAMBU_SLOPE}
                stops={generateStationCodes('JN', 26, 8)}
                skipBeginning
                strokeColor="stroke-nambu"
                stopsToSkip={['JN 21', 'JN 20', 'JN 19', 'JN 16', 'JN 14', 'JN 10', 'JN 04', 'JN 07']}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                origin={JN_07}
                slope={NAMBU_SLOPE}
                stops={generateStationCodes('JN', 7, 4)}
                skipBeginning
                strokeColor="stroke-nambu"
                stopsToSkip={['JN 21', 'JN 20', 'JN 19', 'JN 16', 'JN 14', 'JN 10', 'JN 04', 'JN 07']}
            />
            <Chofu />
            <Meidaimae />
            <YoyogiUehara />
        </>
    );
};

export default Nambu;
