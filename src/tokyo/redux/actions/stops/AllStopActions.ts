import { AppDispatch } from '../../store';
import { addInsideYamanote } from './InsideYamanoteActions';

export const addAllStops = (dispatch: AppDispatch) => {
    dispatch(addInsideYamanote);
};
