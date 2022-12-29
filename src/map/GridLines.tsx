import { useShowGrid } from '../utils/ParameterUtils';
import './GridLines.scss';
import { Dimensions } from '../interfaces/Dimensions';

export const MINOR_LINE = 12;
export const MAJOR_LINE = 12 * 12;

const GridLines = ({ width = 0, height = 0 }: Dimensions): JSX.Element => {
    const showGrid = useShowGrid();

    const getClassName = ({ coord }) => {
        return coord % MAJOR_LINE === 0 ? 'major-grid-line' : 'minor-grid-line';
    };

    const vertLines: JSX.Element[] = [];
    const horzLines: JSX.Element[] = [];
    for (let i = 0; i < height; i += MINOR_LINE) {
        horzLines.push(<line x1={i} x2={i} y1="0" y2={width} className={getClassName({ coord: i })} key={`vert-${i}`} />);
    }

    for (let i = 0; i < width; i += MINOR_LINE) {
        vertLines.push(<line y1={i} y2={i} x1="0" x2={height} className={getClassName({ coord: i })} key={`vert-${i}`} />);
    }

    return (
        <g className={`grid-lines ${showGrid ? 'show-grid-lines' : ''}`}>
            {vertLines}
            {horzLines}
        </g>
    );
};

export default GridLines;
