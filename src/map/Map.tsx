import GridLines from './GridLines';
import { Dimensions } from '../interfaces/Dimensions';
import { BasicStopDefinition } from '../symbols/BasicStop';
import { Route, Routes } from 'react-router';
import Tokyo from '../tokyo/Tokyo';

export const WIDTH = 2384;
export const HEIGHT = 3370;

const Map = ({ width = WIDTH, height = HEIGHT} : Dimensions) => {
    return (
        <section>
            <svg 
                width={`${WIDTH}pt`}
                height={`${HEIGHT}pt`}
                viewBox={`0 0 ${WIDTH}pt ${HEIGHT}pt`} 
                xmlns="http://www.w3.org/2000/svg"
                className="map"
                preserveAspectRatio="xMidYMin meet"
            >
                <BasicStopDefinition />
                <GridLines width={width} height={height} />
                <Routes>
                    <Route path="/tokyo" element={<Tokyo />} />
                </Routes>
            </svg>
        </section>
    )
}

export default Map;