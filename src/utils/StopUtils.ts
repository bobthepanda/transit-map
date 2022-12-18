import { StopData, StopMetadata } from "../symbols/LineSegment";
import { CSVData } from "../interfaces/Stops";
import { useEffect, useState } from "react";
import Papa from 'papaparse';

interface BuildStopParameters {
    ids: string[],
    stopMetadata: Map<string, StopMetadata>
    stops: Map<string, StopData>
}

export const buildStops = ({ ids, stops, stopMetadata } : BuildStopParameters) : StopData[] => {
    return ids.map(id => {
        return { ...stops.get(id), ...stopMetadata.get(id)};
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