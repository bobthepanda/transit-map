import Papa from 'papaparse';
import { MAJOR_LINE } from '../../map/GridLines';
import { useState, useEffect } from 'react';
import { CSVData } from '../../interfaces/Stops';
import { LineSegmentWithStepChange, LineSegmentWithTotalChange, StopData } from '../../symbols/LineSegment';
import { OTEMACHI } from '../../utils/CommonCoordinates';

const Mita = () => {
    const [stops, setStops] = useState(new Map<string, CSVData>());
    useEffect(() => {
        Papa.parse('/data/toei/mita.csv', {
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
            <LineSegmentWithStepChange
                stops={buildStops({ ids: ['I 09', 'I O8', 'I 07', 'I 06', 'I 05', 'I 04']})}
                origin={OTEMACHI}
                ystep={MAJOR_LINE / 2}
            />
        </g>
    )
}

export default Mita;