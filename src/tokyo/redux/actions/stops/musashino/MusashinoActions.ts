import { AppDispatch } from '../../../store';
import { addMusashinoEast } from './MusashinoEast';

export const addMusashino = (dispatch: AppDispatch) => {
    dispatch(addMusashinoEast);
};
