import Hokuso, { HokusoPath } from './Hokuso';
import NipponToneri, { NipponToneriPath } from './NipponToneri';
import ShinKeisei, { ShinKeiseiPath } from './ShinKeisei';
import TsukubaExpress, { TsukubaExpressPath } from './TsukubaExpress';

export const OtherPaths = () => {
    return (
        <>
            <HokusoPath />
            <ShinKeiseiPath />
            <NipponToneriPath />
            <TsukubaExpressPath />
        </>
    );
};

const Other = () => {
    return (
        <g id="other">
            <Hokuso />
            <ShinKeisei />
            <NipponToneri />
            <TsukubaExpress />
        </g>
    );
};

export default Other;
