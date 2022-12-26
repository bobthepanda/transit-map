import { StopData, StopMetadata } from "../symbols/LineSegment";
import { CSVData } from "../interfaces/Stops";
import { useEffect, useState } from "react";
import Papa from 'papaparse';

interface BuildStopParameters {
    ids: string[],
    stopMetadata?: Map<string, StopMetadata>
    stops: Map<string, StopData>
}

export const buildStops = ({ ids, stops, stopMetadata } : BuildStopParameters) : StopData[] => {
    return ids.map(id => {
        return { ...stops.get(id), ...stopMetadata?.get(id)};
    }).filter((item): item is StopData => !!item)
};

export const useStopsFromCSV = (csvName: string) => {
    const [stops, setStops] = useState(new Map<string, CSVData>());
    useEffect(() => {
        Papa.parse(csvName, {
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
    }, [csvName]);

    return stops;
}

export const STOPS_TO_HIDE_TEXT: string[] = [
    'C 11', 'C 09', 'C 08',
    'H 08', 'H 09',
    'M 17',
    'JC 01', 'JY 01',  'JK 26', 'JT 01', // Tokyo
    'JY 30', // Yurakucho
    'JY 29', 'JK 24', 'JT 02', // Shimbashi,
    'H 09', 'M 16', // Ginza
]