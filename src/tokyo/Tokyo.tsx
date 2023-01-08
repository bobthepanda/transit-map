import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './colors/colors.scss';
import './colors/jr-east-colors.scss';
import ChuoRapid from './jr-east/ChuoRapid';
import KeihinTohoku from './jr-east/KeihinTohoku';
import Musashino from './jr-east/Musashino';
import SobuRapid from './jr-east/SobuRapid';
import Tokaido from './jr-east/Tokaido';
import Yamanote from './jr-east/Yamanote';
import loadTokyo from './redux/actions/LoadActions';
import type { AppDispatch } from './redux/store';
import Asakusa from './toei/Asakusa';
import Mita from './toei/Mita';
import Chiyoda from './tokyo-metro/Chiyoda';
import Ginza from './tokyo-metro/Ginza';
import Hibiya from './tokyo-metro/Hibiya';
import Marunouchi from './tokyo-metro/Marunouchi';
import Tozai from './tokyo-metro/Tozai';
import Hanzomon from './tokyo-metro/Hanzomon';
import Yurakucho from './tokyo-metro/Yurakucho';
import Shinjuku from './toei/Shinjuku';
import { ChuoSobu } from './jr-east/ChuoSobu';
import Oedo from './toei/Oedo';
import JobanRapid from './jr-east/JobanRapid';

const useAppDispatch: () => AppDispatch = useDispatch;

const Tokyo = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadTokyo);
    }, []);

    return (
        <g id="tokyo">
            <g id="jr">
                <ChuoRapid />
                <Yamanote />
                <KeihinTohoku />
                <Tokaido />
                <SobuRapid />
                <Musashino />
                <Shinjuku />
                <ChuoSobu />
                <Oedo />
                <JobanRapid />
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
                <Hanzomon />
            </g>
        </g>
    );
};

export default Tokyo;
