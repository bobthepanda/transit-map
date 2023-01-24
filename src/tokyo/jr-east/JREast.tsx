import ChuoRapid, { ChuoRapidPath } from './ChuoRapid';
import { ChuoSobu, ChuoSobuPath } from './ChuoSobu';
import JobanLocal, { JobanLocalPath } from './JobanLocal';
import JobanRapid, { JobanRapidPath } from './JobanRapid';
import KeihinTohoku, { KeihinTohokuPath } from './KeihinTohoku';
import Musashino, { MusashinoPath } from './Musashino';
import Saikyo, { SaikyoPath } from './Saikyo';
import ShonanShinjuku, { ShonanShinjukuPath } from './ShonanShinjuku';
import SobuRapid, { SobuRapidPath } from './SobuRapid';
import Tokaido, { TokaidoPath } from './Tokaido';
import Yamanote from './Yamanote';

export const JREastPaths = () => {
    return (
        <>
            <ChuoRapidPath />
            <ChuoSobuPath />
            <KeihinTohokuPath />
            <TokaidoPath />
            <SobuRapidPath />
            <MusashinoPath />
            <ChuoSobuPath />
            <JobanRapidPath />
            <JobanLocalPath />
            <SaikyoPath />
            <ShonanShinjukuPath />
        </>
    );
};

const JREast = () => {
    return (
        <g id="jr">
            <ChuoRapid />
            <Yamanote />
            <KeihinTohoku />
            <Tokaido />
            <SobuRapid />
            <Musashino />
            <ChuoSobu />
            <JobanRapid />
            <JobanLocal />
            <Saikyo />
            <ShonanShinjuku />
        </g>
    );
};

export default JREast;
