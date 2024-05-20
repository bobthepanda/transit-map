import { Chuo } from './Chuo';
import { Keihin } from './Keihin';
import Nambu from './Nambu';
import { Tohoku } from './Tohoku';

const JR = () => {
    return (
        <>
            <Tohoku />
            <Chuo />
            <Keihin />
            <Nambu />
        </>
    );
};

export default JR;
