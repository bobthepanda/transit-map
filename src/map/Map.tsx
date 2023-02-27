import { Route, Routes } from 'react-router-dom';
import { Dimensions } from '../interfaces/Dimensions';
import Tokyo from '../tokyo/Tokyo';
import GridLines from './GridLines';

// A0 dimensions.
export const HEIGHT = 2384;
export const WIDTH = 3370;

const Map = ({ width = WIDTH * 4, height = HEIGHT * 4 }: Dimensions) => {
    return (
        <section id="map">
            <svg
                width={`${width}pt`}
                height={`${height}pt`}
                viewBox={`0 0 ${width}pt ${height}pt`}
                xmlns="http://www.w3.org/2000/svg"
                className="map"
                preserveAspectRatio="xMidYMin meet"
            >
                <GridLines width={width} height={height} />
                <Routes>
                    <Route path="/tokyo" element={<Tokyo />} />
                </Routes>
            </svg>
        </section>
    );
};

export default Map;
