import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { JRPaths, JRStops } from '../newtokyo/jr-east/JREast';
import { MetroPaths, MetroStops } from '../newtokyo/metro/TokyoMetro';
import { ToeiPaths, ToeiStops } from '../newtokyo/toei/Toei';
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
                <MetroPaths />
                <ToeiPaths />
                <JRPaths />
            </g>
            <g id="tokyo">
                <MetroStops />
                <ToeiStops />
                <JRStops />
            </g>
        </>
    );
};

export default Tokyo;
