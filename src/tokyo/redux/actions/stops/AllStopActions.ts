import { AppDispatch } from '../../store';
import { addCentralGrid } from './central/CentralGridActions';

export const addAllStops = (dispatch: AppDispatch) => {
    dispatch(addCentralGrid);
};
