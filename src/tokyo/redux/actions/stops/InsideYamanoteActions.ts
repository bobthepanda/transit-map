import { AppDispatch } from '../../store';
import { addAkihabaraGrid } from '../AkihabaraGrid';
import { addGinzaGrid } from './GinzaGrid';
import { addKandaGrid } from './KandaGrid';
import { addKyobashiGrid } from './KyobashiGrid';
import { addOedoGrid } from './OedoGrid';
import { addShimbashiGrid } from './ShimbashiGrid';
import { addTokyo } from './TokyoGrid';
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
    dispatch(addAkihabaraGrid);
    dispatch(addOedoGrid);
};
