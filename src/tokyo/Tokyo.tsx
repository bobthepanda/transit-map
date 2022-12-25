import Mita from './toei/Mita';
import './Tokyo.scss'
import Chiyoda from './tokyo-metro/Chiyoda';
import './colors.scss';
import Marunouchi from './tokyo-metro/Marunouchi';
import Hibiya from './tokyo-metro/Hibiya';
import ChuoTokyo from './jr-east/ChuoRapid';
import Yamanote from './jr-east/Yamanote';
import KeihinTohoku from './jr-east/KeihinTohoku';
import Tokaido from './jr-east/Tokaido';
import SobuRapid from './jr-east/SobuRapid';

const Tokyo = (): JSX.Element => {

    return (
        <g id="tokyo">
            <Mita />
            <Chiyoda />
            <Marunouchi />
            <Hibiya />
            <ChuoTokyo />
            <Yamanote />
            <KeihinTohoku />
            <Tokaido />
            <SobuRapid />
        </g>
    );
}

export default Tokyo;