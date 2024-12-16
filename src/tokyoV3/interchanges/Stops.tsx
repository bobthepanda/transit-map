import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Stop } from '../../symbols/BasicStop';
import { RootState } from '../../tokyo/redux/store';

const stationCodesSelector = createSelector([(state: RootState) => state?.stopDefinition], (stopDefinition) => Object.keys(stopDefinition));

const Interchanges = () => {
    const stationCodes: string[] = useSelector(stationCodesSelector);

    return stationCodes.map((code) => {
        return <Stop key={code} stationCode={code} />;
    });
};

export default Interchanges;
