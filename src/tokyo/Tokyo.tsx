import ChuoRapid from './jr-east/ChuoRapid';
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
import Tozai from './tokyo-metro/Tozai';
import './colors/colors.scss';
import './colors/jr-east-colors.scss';
import Yurakucho from './tokyo-metro/Yurakucho';
import Keiyo from './jr-east/Keiyo';
import { useEffect } from 'react';
import { loadTokyo } from './redux/actions/LoadActions';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './redux/store';

const useAppDispatch: () => AppDispatch = useDispatch;

const Tokyo = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadTokyo);
    }, [])

    return (
        <g id="tokyo">
            <g id="jr">
                <ChuoRapid />
                <Yamanote />
                <KeihinTohoku />
                <Tokaido />
                <SobuRapid />
                <Keiyo />
            </g>
            <g id="toei">
                <Mita />
                <Asakusa />
            </g>
            <g id="tokyo-metro">
                <Chiyoda />
                <Marunouchi />
                <Hibiya />
                <Ginza />
                <Tozai />
                <Yurakucho />
            </g>
        </g>
    );
}

export default Tokyo;