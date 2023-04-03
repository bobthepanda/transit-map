import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { JRPaths, JRStops } from '../newtokyo/jr-east/JREast';
import { KeikyuPaths, KeikyuStops } from '../newtokyo/keikyu/Keikyu';
import { KeioPaths, KeioStops } from '../newtokyo/keio/Keio';
import { MetroPaths, MetroStops } from '../newtokyo/metro/TokyoMetro';
import { OdakyuPaths, OdakyuStops } from '../newtokyo/odakyu/Odakyu';
import { OtherPaths, OtherStops } from '../newtokyo/other/Other';
import { ToeiPaths, ToeiStops } from '../newtokyo/toei/Toei';
import { TokyuPath, TokyuStops } from '../newtokyo/tokyu/Tokyu';
import './colors/jr-east-colors.css';
import loadTokyo from './redux/actions/LoadActions';
import type { AppDispatch } from './redux/store';

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
                <KeikyuPaths />
                <KeioPaths />
                <TokyuPath />
                <OdakyuPaths />
                <MetroPaths />
                <ToeiPaths />
                <JRPaths />
            </g>
            <g id="tokyo">
                <OtherStops />
                <KeikyuStops />
                <KeioStops />
                <TokyuStops />
                <OdakyuStops />
                <MetroStops />
                <ToeiStops />
                <JRStops />
            </g>
        </>
    );
};

export default Tokyo;
