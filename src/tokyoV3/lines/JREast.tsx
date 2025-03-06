import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import LinePath from '../../symbols/LinePath';
import { selectMidpoint, selectStopLocation } from '../../tokyo/redux/slice/StopLocation';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NNE, NNW, offsetCoordinates, RADIUS, S, scale, scaleToUnitX, SSE, SSW, W } from '../../utils/PathUtils';

const Yamanote = () => {
    const SUGAMO_MIDPOINT = useSelector((state) => selectMidpoint(state, 'JY 11', 'JY 12'));
    return (
        <LinePath
            color="stroke-yamanote"
            points={[
                { location: 'JY 29', direction: NNE },
                { location: 'JY 30', direction: NNE },
                { location: 'JY 01', direction: NNE },
                { location: 'JY 02', direction: NNE },
                { location: 'JY 03', direction: NNE },
                { location: 'JY 04', direction: NNE },
                { location: 'JY 05', direction: NNE },
                { location: 'JY 06', direction: NNW },
                { location: 'JY 07', direction: NNW },
                { location: 'JY 08', direction: NNW },
                { location: 'JY 09', direction: NNW },
                { location: 'JY 10', direction: W },
                { location: 'JY 11', direction: W },
                { location: SUGAMO_MIDPOINT, direction: SSW },
                { location: 'JY 12', direction: W },
                { location: 'JY 13', direction: SSW },
            ]}
        />
    );
};

const ChuoSobu = () => {
    return (
        <LinePath
            color="stroke-chuo-sobu"
            points={[
                { location: 'JB 14', direction: NNE },
                { location: 'JB 16', direction: NNE },
                { location: 'JB 17', direction: E },
                { location: 'JB 18', direction: E },
                { location: 'JB 19', direction: E },
                { location: 'JB 20', direction: E },
                { location: 'JB 21', direction: E },
                { location: 'JB 22', direction: NNE },
                { location: 'JB 23', direction: NNE },
                { location: 'JB 24', direction: NNE },
                { location: 'JB 25', direction: NNE },
                { location: 'JB 26', direction: SSE, radii: RADIUS + OFFSET * 2 },
                { location: 'JB 27', direction: SSE },
                { location: 'JB 28', direction: SSE },
                { location: 'JB 29', direction: SSE },
                { location: 'JB 30', direction: SSE },
            ]}
        />
    );
};

const KeihinTohoku = () => {
    return (
        <LinePath
            color="stroke-keihin-tohoku"
            points={[
                { location: 'JK 24', direction: NNE },
                { location: 'JK 25', direction: NNE },
                { location: 'JK 26', direction: NNE },
                { location: 'JK 27', direction: NNE },
                { location: 'JK 28', direction: NNE },
                { location: 'JK 28', direction: NNE },
                { location: 'JK 29', direction: NNE },
                { location: 'JK 30', direction: NNE },
                { location: 'JK 31', direction: NNW, radii: RADIUS + (OFFSET * 2) / 3 },
                { location: 'JK 32', direction: NNW },
                { location: 'JK 33', direction: NNW },
                { location: 'JK 47', direction: NNW },
            ]}
        />
    );
};

const Tokaido = () => {
    return (
        <LinePath
            color="stroke-tokaido"
            points={[
                { location: 'JT 02', direction: NNE },
                { location: 'JT 01', direction: NNE },
                { location: 'JU 01', direction: NNE },
                { location: 'JU 02', direction: NNE },
            ]}
        />
    );
};

const SobuRapid = () => {
    const ryogokuOffset = useSelector(
        createSelector([(state) => selectStopLocation(state, 'JB 21')], (stop) => offsetCoordinates(stop, scale(S, OFFSET)))
    );

    return (
        <LinePath
            color="stroke-sobu-rapid"
            points={[
                { location: 'JO 18', direction: NNE },
                { location: 'JO 19', direction: NNE },
                { location: 'JO 20', direction: E },
                { location: 'JO 21', direction: NNE },
                { location: ryogokuOffset, direction: E },
                { location: 'JO 22', direction: NNE, radii: RADIUS + (OFFSET * 2) / 3 },
                { location: 'JO 23', direction: NNE },
                { location: 'JO 24', direction: SSE, radii: RADIUS + OFFSET * 2 },
            ]}
        />
    );
};

const ChuoRapid = () => {
    const kanda = useSelector((state) => selectStopLocation(state, 'JC 02'));
    return (
        <LinePath
            color="stroke-chuo-rapid"
            points={[
                { location: 'JC 01', direction: NNE },
                { location: 'JC 02', direction: NNE },
                { location: offsetCoordinates(kanda, { dy: OFFSET * -4 }), direction: NNW },
                { location: 'JC 03', direction: W },
                { location: 'JC 04', direction: SSW },
            ]}
        />
    );
};

const Keiyo = () => {
    return (
        <LinePath
            color="stroke-keiyo"
            points={[
                { location: 'JE 01', direction: SSE },
                { location: 'JE 02', direction: SSE },
                { location: 'JE 03', direction: SSE },
                { location: 'JE 04', direction: SSE },
                { location: 'JE 05', direction: E, radii: RADIUS + (OFFSET * 2) / 3 },
                { location: 'JE 06', direction: NNE, radii: RADIUS + (OFFSET * 2) / 3 },
                { location: 'JE 07', direction: NNE },
                { location: 'JE 08', direction: NNE },
                { location: 'JE 09', direction: NNE },
            ]}
        />
    );
};

const Musashino = () => {
    return (
        <LinePath
            color="stroke-musashino"
            points={[
                { location: 'JE 01 M', direction: SSE },
                { location: 'JE 02 M', direction: SSE },
                { location: 'JE 03 M', direction: SSE },
                { location: 'JE 04 M', direction: SSE },
                { location: 'JE 05 M', direction: E },
                { location: 'JM 10', direction: NNE },
                { location: 'JM 13', direction: NNW },
                { location: 'JM 16', direction: NNW },
                { location: 'JM 25', direction: W },
            ]}
        />
    );
};

const Saikyo = () => {
    return (
        <LinePath
            color="stroke-saikyo"
            points={[
                { location: 'JA 12', direction: NNE },
                { location: 'JA 15', direction: NNW },
            ]}
        />
    );
};

const ShonanShinjuku = () => {
    return (
        <LinePath
            color="stroke-shonan-shinjuku"
            points={[
                { location: 'JS 21', direction: NNE },
                { location: 'JS 22', direction: NNW, radii: RADIUS + (OFFSET * 2) / 3 },
                { location: 'JS 23', direction: NNW },
                { location: 'JS 24', direction: NNW },
            ]}
        />
    );
};

const Nambu = () => {
    // return <SVGPath color="stroke-nambu" points={[JN_01, JN_14, JN_20, JN_26]} directions={[NW, N, NW, N]} />;
    return null;
};

const Yokohama = () => {
    // return <SVGPath color="stroke-yokohama" points={[JH_12, JH_14, JH_15, JH_32]} directions={[E, N, NW, N]} />;
    return null;
};

const JobanRapid = () => {
    const nipporiTurn = offsetCoordinates(
        useSelector((state) => selectStopLocation(state, 'JJ 02')),
        scaleToUnitX(N, OFFSET * 3)
    );
    const ayaseOffset = offsetCoordinates(
        useSelector((state) => selectStopLocation(state, 'JL 19')),
        scale(S, OFFSET)
    );
    return (
        <LinePath
            color="stroke-joban-rapid"
            points={[
                { location: 'JJ 01', direction: NNE },
                { location: 'JJ 02', direction: NNW, radii: RADIUS + (OFFSET * 2 * 2) / 3 },
                { location: nipporiTurn, direction: NNE },
                { location: 'JJ 03', direction: E },
                { location: 'JJ 04', direction: NNE },
                { location: 'JJ 05', direction: NNE },
                { location: ayaseOffset, direction: E },
                { location: 'JJ 06', direction: NNE, radii: RADIUS + (OFFSET * 2) / 3 },
            ]}
        />
    );
};

const JobanLocal = () => {
    return (
        <LinePath
            color="stroke-joban-local"
            points={[
                { location: 'JL 19', direction: E },
                { location: 'JL 22', direction: NNE },
                { location: 'JL 25', direction: NNE },
            ]}
        />
    );
};

const JREast = () => {
    return (
        <g id="jr-east">
            <Yamanote />
            <ChuoSobu />
            <KeihinTohoku />
            <Tokaido />
            <SobuRapid />
            <ChuoRapid />
            <Musashino />
            <Keiyo />
            <Saikyo />
            <ShonanShinjuku />
            <Nambu />
            <Yokohama />
            <JobanRapid />
            <JobanLocal />
        </g>
    );
};

export default JREast;
