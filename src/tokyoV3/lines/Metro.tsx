import { useSelector } from 'react-redux';
import { MAJOR_LINE } from '../../map/GridLines';
import LinePath from '../../symbols/LinePath';
import { selectMidpoint, selectStopLocation } from '../../tokyo/redux/slice/StopLocation';
import { OFFSET } from '../../utils/CommonCoordinates';
import { E, N, NNE, NNW, offsetCoordinates, RADIUS, S, scaleToUnitY, SSE, SSW, W } from '../../utils/PathUtils';

const Ginza = () => {
    return (
        <LinePath
            color="stroke-ginza"
            points={[
                { location: 'G 05', direction: SSE },
                { location: 'G 06', direction: SSE },
                { location: 'G 07', direction: SSE },
                { location: 'G 08', direction: SSE },
                { location: 'G 09', direction: NNE },
                { location: 'G 10', direction: NNE },
                { location: 'G 11', direction: NNE },
                { location: 'G 12', direction: NNE },
                { location: 'G 13', direction: NNW },
                { location: 'G 14', direction: NNE },
                { location: 'G 15', direction: NNE },
                { location: 'G 16', direction: E },
                { location: 'G 17', direction: E },
                { location: 'G 18', direction: E },
                { location: 'G 19', direction: E },
            ]}
        />
    );
};

const Marunouchi = () => {
    const YOTSUYA_TURN = useSelector((state) => selectMidpoint(state, 'M 12', 'M 13'));
    const SHINJUKU_TURN = useSelector((state) => selectMidpoint(state, 'M 08', 'M 09'));
    return (
        <LinePath
            color="stroke-marunouchi"
            points={[
                { location: 'M 08', direction: E },
                { location: SHINJUKU_TURN, direction: SSE },
                { location: 'M 09', direction: E },
                { location: 'M 12', direction: SSE },
                { location: YOTSUYA_TURN, direction: SSW, radii: RADIUS - (OFFSET * 2) / 3 },
                { location: 'M 13', direction: SSE, radii: RADIUS - (OFFSET * 2) / 3 },
                { location: 'M 14', direction: E },
                { location: 'M 15', direction: SSE },
                { location: 'M 16', direction: NNE },
                { location: 'M 17', direction: NNW },
                { location: 'M 18', direction: NNE },
                { location: 'M 19', direction: NNW },
                { location: 'M 20', direction: NNW },
                { location: 'M 21', direction: NNW },
                { location: 'M 22', direction: W },
                { location: 'M 23', direction: NNW },
                { location: 'M 24', direction: NNW },
                { location: 'M 25', direction: W },
            ]}
        />
    );
};

const Namboku = () => {
    return (
        <LinePath
            color="stroke-namboku"
            points={[
                { location: 'N 06', direction: NNE },
                { location: 'N 07', direction: NNW },
                { location: 'N 11', direction: NNE },
                { location: 'N 14', direction: NNW },
                { location: 'N 16', direction: NNE },
                { location: 'N 19', direction: NNW },
                { location: 'SR 22', direction: NNE },
                { location: 'SR 25', direction: NNW },
                { location: 'SR 26', direction: NNW },
            ]}
        />
    );
};

const Hanzomon = () => {
    return (
        <LinePath
            color="stroke-hanzomon"
            points={[
                { location: 'Z 04', direction: E },
                { location: 'Z 05', direction: N },
                { location: 'Z 07', direction: E },
                { location: 'Z 08', direction: SSE },
                { location: 'Z 09', direction: E },
                { location: 'Z 10', direction: E },
                { location: 'Z 11', direction: E },
                { location: 'Z 12', direction: NNE },
                { location: 'Z 13', direction: NNE },
                { location: 'Z 14', direction: NNW },
            ]}
        />
    );
};

const Yurakucho = () => {
    const NAGATCHO_MIDPOINT = useSelector((state) => selectMidpoint(state, 'Y 15', 'Y 16'));
    return (
        <LinePath
            color="stroke-yurakucho"
            points={[
                { location: 'Y 09', direction: SSE },
                { location: 'Y 13', direction: SSW },
                { location: 'Y 15', direction: SSE },
                { location: NAGATCHO_MIDPOINT, direction: SSW, radii: RADIUS - (OFFSET * 2) / 3 },
                { location: 'Y 16', direction: SSE, radii: RADIUS - (OFFSET * 2) / 3 },
                { location: 'Y 17', direction: E },
                { location: 'Y 18', direction: SSE },
                { location: 'Y 19', direction: SSE },
                { location: 'Y 20', direction: SSE },
                { location: 'Y 21', direction: SSE },
            ]}
        />
    );
};

const Chiyoda = () => {
    return (
        <LinePath
            color="stroke-chiyoda"
            points={[
                { location: 'C 07', direction: E },
                { location: 'C 08', direction: SSE, radii: RADIUS + 20 },
                { location: 'C 09', direction: NNE },
                { location: 'C 10', direction: NNE },
                { location: 'C 11', direction: NNE },
                { location: 'C 12', direction: NNE },
                { location: 'C 13', direction: NNE },
                { location: 'C 14', direction: NNW },
                { location: 'C 15', direction: NNE },
                { location: 'C 16', direction: NNE },
                { location: 'C 17', direction: E },
                { location: 'C 18', direction: NNE },
                { location: 'C 19', direction: E },
                { location: 'C 20', direction: NNE },
            ]}
        />
    );
};

const Hibiya = () => {
    return (
        <LinePath
            color="stroke-hibiya"
            points={[
                { location: 'H 06', direction: NNE },
                { location: 'H 07', direction: NNE },
                { location: 'H 08', direction: SSE },
                { location: 'H 09', direction: SSE },
                { location: 'H 10', direction: SSE },
                { location: 'H 11', direction: NNE },
                { location: 'H 12', direction: NNE },
                { location: 'H 13', direction: NNE },
                { location: 'H 14', direction: NNW },
                { location: 'H 15', direction: NNW },
                { location: 'H 16', direction: NNE },
                { location: 'H 17', direction: NNE },
                { location: 'H 18', direction: NNE },
                { location: 'H 19', direction: NNE },
                { location: 'H 20', direction: NNE },
                { location: 'H 21', direction: NNE },
                { location: 'H 22', direction: NNE },
            ]}
        />
    );
};

const Tozai = () => {
    return (
        <LinePath
            color="stroke-tozai"
            points={[
                { location: 'T 03', direction: SSE },
                { location: 'T 04', direction: E },
                { location: 'T 06', direction: SSE },
                { location: 'T 07', direction: E },
                { location: 'T 08', direction: SSE },
                { location: 'T 09', direction: E },
                { location: 'T 10', direction: SSE },
                { location: 'T 11', direction: SSE },
                { location: 'T 12', direction: SSE },
                { location: 'T 13', direction: E },
                { location: 'T 14', direction: E },
                { location: 'T 15', direction: NNE },
                { location: 'T 16', direction: NNE },
                { location: 'T 17', direction: NNE },
                { location: 'T 18', direction: NNE },
                { location: 'T 19', direction: NNE },
                { location: 'T 20', direction: NNE },
                { location: 'T 21', direction: NNE },
                { location: 'T 22', direction: E },
                { location: 'T 23', direction: E },
            ]}
        />
    );
};

const Shinjuku = () => {
    const SHINJUKU_TURN = useSelector((state) => selectMidpoint(state, 'S 02', 'S 03'));
    return (
        <LinePath
            color="stroke-shinjuku"
            points={[
                { location: 'S 01', direction: E },
                { location: SHINJUKU_TURN, direction: NNE },
                { location: 'S 06', direction: E },
                { location: 'S 07', direction: E },
                { location: 'S 08', direction: E },
                { location: 'S 09', direction: SSE },
                { location: 'S 10', direction: E },
                { location: 'S 11', direction: E },
                { location: 'S 12', direction: E },
                { location: 'S 13', direction: E },
                { location: 'S 14', direction: NNE },
                { location: 'S 15', direction: NNE },
                { location: 'S 16', direction: NNE },
                { location: 'S 17', direction: NNE },
                { location: 'S 18', direction: NNE },
                { location: 'S 29', direction: E },
                { location: 'S 20', direction: E },
            ]}
        />
    );
};

const Mita = () => {
    return (
        <LinePath
            color="stroke-mita"
            points={[
                { location: 'I 06', direction: NNE },
                { location: 'I 07', direction: NNE },
                { location: 'I 08', direction: NNE },
                { location: 'I 09', direction: NNE },
                { location: 'I 10', direction: NNW },
                { location: 'I 11', direction: NNW },
                { location: 'I 12', direction: NNW },
                { location: 'I 13', direction: NNE },
                { location: 'I 14', direction: NNE },
                { location: 'I 15', direction: NNW },
                { location: 'I 17', direction: NNW },
            ]}
        />
    );
};

const Asakusa = () => {
    return (
        <LinePath
            color="stroke-asakusa"
            points={[
                { location: 'A 10', direction: SSE },
                { location: 'A 11', direction: NNE },
                { location: 'A 12', direction: NNE },
                { location: 'A 13', direction: NNE },
                { location: 'A 14', direction: NNE },
                { location: 'A 15', direction: NNE },
                { location: 'A 16', direction: NNE },
                { location: 'A 17', direction: NNE },
                { location: 'A 18', direction: E },
                { location: 'A 19', direction: NNE },
                { location: 'A 20', direction: NNE },
            ]}
        />
    );
};

const Oedo = () => {
    const E_12 = useSelector((state) => selectStopLocation(state, 'E 12'));
    const YOYOGI_TURN = offsetCoordinates(
        useSelector((state) => selectStopLocation(state, 'E 26')),
        scaleToUnitY(S, OFFSET * 6),
        scaleToUnitY(NNW, OFFSET)
    );
    return (
        <LinePath
            color="stroke-oedo"
            points={[
                { location: 'E 01', direction: E },
                { location: 'E 06', direction: NNE },
                { location: 'E 07', direction: E },
                { location: 'E 08', direction: E },
                { location: 'E 09', direction: E },
                { location: 'E 10', direction: E },
                { location: 'E 11', direction: E },
                { location: offsetCoordinates(E_12, scaleToUnitY(N, MAJOR_LINE * 0.5)), direction: SSE },
                { location: 'E 12', direction: SSW },
                { location: 'E 13', direction: SSW },
                { location: 'E 14', direction: SSW },
                { location: 'E 15', direction: SSW },
                { location: 'E 16', direction: SSW },
                { location: 'E 25', direction: W },
                { location: YOYOGI_TURN, direction: NNW },
                { location: 'E 26', direction: NNE },
                { location: 'E 27', direction: NNW },
            ]}
        />
    );
};

const Fukutoshin = () => {
    return (
        <LinePath
            color="stroke-fukutoshin"
            points={[
                { location: 'F 09', direction: SSE },
                { location: 'F 13', direction: SSW },
            ]}
        />
    );
};

const Metro = () => {
    return (
        <g id="tokyo-metro">
            <Ginza />
            <Marunouchi />
            <Namboku />
            <Hanzomon />
            <Yurakucho />
            <Chiyoda />
            <Hibiya />
            <Tozai />
            <Shinjuku />
            <Mita />
            <Asakusa />
            <Oedo />
            <Fukutoshin />
        </g>
    );
};

export default Metro;
