import { AppDispatch } from '../../store';
import { addCentralGrid } from './central/CentralGridActions';
import { addMusashino } from './musashino/MusashinoActions';

export const addAllStops = (dispatch: AppDispatch) => {
    dispatch(addCentralGrid);
    dispatch(addMusashino);
};
