import Hokuso, { HokusoPath } from './Hokuso';
import NipponToneri, { NipponToneriPath } from './NipponToneri';
import Sakura, { SakuraPath } from './Sakura';
import ShinKeisei, { ShinKeiseiPath } from './ShinKeisei';
import TsukubaExpress, { TsukubaExpressPath } from './TsukubaExpress';

export const OtherPaths = () => {
    return (
        <>
            <HokusoPath />
            <ShinKeiseiPath />
            <NipponToneriPath />
            <TsukubaExpressPath />
            <SakuraPath />
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
            <Sakura />
        </g>
    );
};

export default Other;
