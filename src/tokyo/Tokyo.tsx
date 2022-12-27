import './colors.scss';
import ChuoTokyo from './jr-east/ChuoRapid';
import KeihinTohoku from './jr-east/KeihinTohoku';
import SobuRapid from './jr-east/SobuRapid';
import Tokaido from './jr-east/Tokaido';
import Yamanote from './jr-east/Yamanote';
import Mita from './toei/Mita';
import Asakusa from './toei/Asakusa';
import Chiyoda from './tokyo-metro/Chiyoda';
import Ginza from './tokyo-metro/Ginza';
import Hibiya from './tokyo-metro/Hibiya';
import Marunouchi from './tokyo-metro/Marunouchi';
import './Tokyo.scss';

const Tokyo = (): JSX.Element => {

    return (
        <g id="tokyo">
            <Mita />
            <Chiyoda />
            <Marunouchi />
            <Hibiya />
            <Ginza />
            <Asakusa />
            <ChuoTokyo />
            <Yamanote />
            <KeihinTohoku />
            <Tokaido />
            <SobuRapid />
        </g>
    );
}

export default Tokyo;