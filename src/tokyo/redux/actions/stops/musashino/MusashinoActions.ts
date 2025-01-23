import { AppDispatch } from '../../../store';
import { addSobuToMusashino } from './SobuToMusashino';

export const addMusashino = (dispatch: AppDispatch) => {
    dispatch(addSobuToMusashino);
};
