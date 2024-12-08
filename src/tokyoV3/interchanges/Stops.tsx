import { useSelector } from 'react-redux';
import { Stop } from '../../symbols/BasicStop';
import { RootState } from '../../tokyo/redux/store';

const Interchanges = () => {
    const stationCodes: string[] = useSelector((state: RootState) => Object.keys(state?.stopDefinition));

    console.log(stationCodes);

    return stationCodes.map((code) => {
        return <Stop key={code} stationCode={code} />;
    });
};

export default Interchanges;
