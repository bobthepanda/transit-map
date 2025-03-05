import { AppDispatch } from '../../../store';
import { addMusashinoEast } from './MusashinoEast';
import { addMusashinoNorthEast } from './MusashinoNorthEast';

export const addMusashino = (dispatch: AppDispatch) => {
    dispatch(addMusashinoEast);
    dispatch(addMusashinoNorthEast);
};
