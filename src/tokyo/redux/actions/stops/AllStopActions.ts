import { AppDispatch } from '../../store';
import { addCentralGrid } from './CentralGridActions';

export const addAllStops = (dispatch: AppDispatch) => {
    dispatch(addCentralGrid);
};
