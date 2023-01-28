import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './colors/jr-east-colors.css';
import JREast, { JREastPaths } from './jr-east/JREast';
import Main from './keisei/Main';
import Oshiage from './keisei/Oshiage';
import Other, { OtherPaths } from './other/Other';
import loadTokyo from './redux/actions/LoadActions';
import type { AppDispatch } from './redux/store';
import Kameido from './tobu/Kameido';
import Skytree from './tobu/Skytree';
import UrbanPark from './tobu/UrbanPark';
import Asakusa from './toei/Asakusa';
import Mita from './toei/Mita';
import Oedo from './toei/Oedo';
import Shinjuku from './toei/Shinjuku';
import TokyoMetro from './tokyo-metro/TokyoMetro';

const useAppDispatch: () => AppDispatch = useDispatch;

const Tokyo = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadTokyo);
    }, [dispatch]);

    return (
        <>
            <g id="tokyo-paths">
                <OtherPaths />
                <JREastPaths />
            </g>
            <g id="tokyo">
                <Other />
                <JREast />
                <g id="toei">
                    <Mita />
                    <Asakusa />
                    <Oedo />
                    <Shinjuku />
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
            </g>
        </>
    );
};

export default Tokyo;
