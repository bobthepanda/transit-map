import Papa from 'papaparse';
import { Stop } from '../../symbols/BasicStop';
import { MAJOR_LINE } from '../../map/GridLines';
import { useState, useEffect } from 'react';
import { CSVData } from '../../interfaces/Stops';

const Maronouchi = () => {
    const [stops, setStops] = useState(new Map<string, CSVData>());
    useEffect(() => {
        Papa.parse('/data/tokyo-metro/maronouchi.csv', {
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

    let y = 0;
    const stopElements: JSX.Element[] = Array.from(stops, ([key, value]) => {
        y += MAJOR_LINE;
        const { stationCode, eng: text, jp: subtitleText } = value;
        return (
            <Stop location={{x: MAJOR_LINE, y }} stationCode={stationCode} text={text} subtitleText={subtitleText} key={key}/>
        );
    })

    return (
        <g id="maronouchi">
            { stopElements }
        </g>
    )
}

export default Maronouchi;