import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './colors/jr-east-colors.css';
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
import Shinjuku from './toei/Shinjuku';
import { ChuoSobu } from './jr-east/ChuoSobu';
import Oedo from './toei/Oedo';
import JobanRapid from './jr-east/JobanRapid';
import Main from './keisei/Main';
import Skytree from './tobu/Skytree';
import Kameido from './tobu/Kameido';
import Oshiage from './keisei/Oshiage';
import JobanLocal from './jr-east/JobanLocal';
import Hokuso from './other/Hokuso';
import UrbanPark from './tobu/UrbanPark';
import ShinKeisei from './other/ShinKeisei';
import TokyoMetro from './tokyo-metro/TokyoMetro';

const useAppDispatch: () => AppDispatch = useDispatch;

const Tokyo = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadTokyo);
    }, [dispatch]);

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
                <JobanLocal />
            </g>
            <g id="toei">
                <Mita />
                <Asakusa />
            </g>
            <TokyoMetro />
            <g id="keisei">
                <Oshiage />
                <Main />
            </g>
            <g id="tobu">
                <Kameido />
                <Skytree />
                <UrbanPark />
            </g>
            <g id="other">
                <Hokuso />
                <ShinKeisei />
            </g>
        </g>
    );
};

export default Tokyo;
