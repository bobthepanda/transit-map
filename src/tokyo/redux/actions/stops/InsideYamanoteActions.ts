import { AppDispatch } from '../../store';
import { addTokyo } from './addTokyo';
import { addGinzaGrid } from './GinzaGrid';
import { addKandaGrid } from './KandaGrid';
import { addKyobashiGrid } from './KyobashiGrid';
import { addShimbashiGrid } from './ShimbashiGrid';
import { addTozaiGrid } from './TozaiGrid';
import { addYurakuchoGrid } from './YurakuchoGrid';

export const addInsideYamanote = (dispatch: AppDispatch) => {
    dispatch(addTokyo);
    dispatch(addTozaiGrid);
    dispatch(addKyobashiGrid);
    dispatch(addKandaGrid);
    dispatch(addYurakuchoGrid);
    dispatch(addGinzaGrid);
    dispatch(addShimbashiGrid);
};
