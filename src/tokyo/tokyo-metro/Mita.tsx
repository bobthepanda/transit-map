import Papa from 'papaparse';
import { Stop } from '../../symbols/BasicStop';
import { MAJOR_LINE } from '../../map/GridLines';
import { useState, useEffect } from 'react';
import { CSVData } from '../../interfaces/Stops';
import { StopData } from '../../symbols/LineSegment';
import LineSegment from '../../symbols/LineSegment';

const Maronouchi = () => {
    const [stops, setStops] = useState(new Map<string, CSVData>());
    useEffect(() => {
        Papa.parse('/data/tokyo-metro/mita.csv', {
            header: true,
            download: true,
            complete: (results) => {
                let newStops = new Map<string, CSVData>();
                const { data } = results;
                data.forEach((obj: CSVData) => {
                    newStops.set(obj.stationCode, obj);
                });
                setStops(newStops);
            }
        })
    }, []);

    const buildStops = ({ ids } : { ids: string[]}) : StopData[] => {
        return ids.map(id => {
            return stops.get(id);
        }).filter((item): item is StopData => !!item)
    };

    return (
        <g id="mita">
            <LineSegment
                stops={buildStops({ ids: ['I 09', 'I O8', 'I 07', 'I 06', 'I 05', 'I 04']})}
                origin={{x: MAJOR_LINE, y: MAJOR_LINE}}
                dy={4 * MAJOR_LINE}
            />
        </g>
    )
}

export default Maronouchi;