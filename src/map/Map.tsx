import { Route, Routes } from 'react-router-dom';
import { Dimensions } from '../interfaces/Dimensions';
import OldTokyo from '../tokyo/OldTokyo';
import Tokyo from '../tokyo/Tokyo';
import { HEIGHT, WIDTH } from '../utils/CommonCoordinates';
import GridLines from './GridLines';

const Map = ({ width = WIDTH, height = HEIGHT }: Dimensions) => {
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
                    <Route path="/oldtokyo" element={<OldTokyo />} />
                </Routes>
            </svg>
        </section>
    );
};

export default Map;
