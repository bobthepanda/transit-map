import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../tokyo/colors/jr-east-colors.css';
import loadTokyo from '../tokyo/redux/actions/LoadActions';
import { AppDispatch } from '../tokyo/redux/store';
import '../tokyo/Tokyo.css';
import Interchanges from './interchanges/Stops';
import Lines from './lines/Lines';

const useAppDispatch: () => AppDispatch = useDispatch;

const TokyoV3 = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadTokyo);
    }, [dispatch]);

    return (
        <>
            <Lines />
            <Interchanges />
        </>
    );
};

export default TokyoV3;
