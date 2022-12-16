import { Coordinates } from '../interfaces/Dimensions';
import { BasicStop } from '../symbols/BasicStop';

const origin: Coordinates = { x: 100, y: 100 };

const TokyoStops = (): JSX.Element => {
    return (
        <BasicStop {...origin} />
    )
}

export default TokyoStops;