import { Coordinates } from '../interfaces/Dimensions';
import './basic-stop.scss';

const ID = 'basic-stop';

const UNIT_SIZE = 12;

const TOTAL_SIZE = 3 * UNIT_SIZE;

const HALF_SIZE = TOTAL_SIZE * .5;

export const BasicStopDefinition = (): JSX.Element => {
    // return (
    //     <symbol id={ID} width={TOTAL_SIZE} height={TOTAL_SIZE} refX="center" refY="center" className="stop-bullet">
    //         <circle cx={HALF_SIZE} cy={HALF_SIZE} r={UNIT_SIZE} />
    //     </symbol>
    // );

    return (
        <defs>
            <circle id={ID} cx="0" cy="0"  r={UNIT_SIZE} className="stop-bullet" />
        </defs>
    );
}

export const BasicStop = ({x, y}: Coordinates): JSX.Element => {
    return (<use href={`#${ID}`} x={x} y={y} />);
}