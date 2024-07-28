import { TextAlignment } from '../../../symbols/BasicStop';
import { LineSegmentWithStepChange } from '../../../symbols/LineSegment';
import { generateStationCodes } from '../../../utils/StopUtils';
import { Bubaigawara } from './Bubaigawara';
import { Chofu } from './Chofu';
import { Fuchuhommachi } from './Fuchuhommachi';
import { Gotokuji } from './Gotokuji';
import { Inadazutsumi, JN_16 } from './Inadazutsumi';
import { Meidaimae } from './Meidaimae';
import { MinamiTama } from './MinamiTama';
import { Mizonokuchi } from './Mizonokuchi';
import { MusashiKosugi } from './MusashiKosugi';
import { NAMBU_SLOPE } from './NAMBU_SLOPE';
import { Noborito } from './Noborito';
import { Setagaya } from './Setagaya';
import { ShimoKitazawa } from './ShimoKitazawa';
import { ShimoTokaido } from './ShimoTokaido';
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
                stops={generateStationCodes('JN', 26, 21)}
                skipBeginning
                strokeColor="stroke-nambu"
                stopsToSkip={['JN 21', 'JN 20', 'JN 19', 'JN 16', 'JN 14', 'JN 10', 'JN 04', 'JN 07']}
                textAlignments={[TextAlignment.LEFT]}
            />
            <LineSegmentWithStepChange
                origin={JN_16}
                slope={NAMBU_SLOPE}
                stops={generateStationCodes('JN', 16, 9)}
                skipBeginning
                strokeColor="stroke-nambu"
                stopsToSkip={['JN 21', 'JN 20', 'JN 19', 'JN 16', 'JN 14', 'JN 10', 'JN 04', 'JN 07']}
                textAlignments={[TextAlignment.LEFT]}
            />
            <Chofu />
            <ShimoTokaido />
            <Meidaimae />
            <YoyogiUehara />
            <Gotokuji />
            <Setagaya />
        </>
    );
};

export default Nambu;
