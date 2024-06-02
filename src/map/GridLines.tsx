import { Dimensions } from '../interfaces/Dimensions';
import { useShowGrid } from '../utils/ParameterUtils';
import './GridLines.scss';

export const MINOR_LINE = 12;
export const MAJOR_LINE = 12 * 12;

const GridLines = ({ width = 0, height = 0 }: Dimensions): JSX.Element => {
    const showGrid = useShowGrid();

    const vertLines: JSX.Element[] = [];
    const horzLines: JSX.Element[] = [];
    for (let i = 0; i < height; i += MINOR_LINE) {
        vertLines.push(<line x1={i} x2={i} y1="0" y2={width} className="grid-line" key={`vert-${i}`} />);
    }

    for (let i = 0; i < width; i += MINOR_LINE) {
        horzLines.push(<line y1={i} y2={i} x1="0" x2={height} className="grid-line" key={`vert-${i}`} />);
    }

    return (
        <g className={`grid-lines ${showGrid ? 'show-grid-lines' : ''}`}>
            <g className="vertical-lines">{vertLines}</g>
            <g className="horizontal-lines">{horzLines}</g>
        </g>
    );
};

export default GridLines;
