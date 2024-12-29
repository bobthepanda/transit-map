import { RelativeCoordinates } from '../../../interfaces/Dimensions';
import { offsetCoordinates, scale } from '../../../utils/PathUtils';
import { StopDefinition, StopMetadata, addStopDefinition, selectStopLocation } from './StopLocation';

/**
 * Convenience function to add multiple stop definitions.
 * @param stops
 * @returns
 */
const addStopDefinitions = (stops: StopDefinition[]) => {
    return (dispatch) => {
        stops.forEach((stop) => dispatch(addStopDefinition(stop)));
    };
};

/**
 * If a stop already exists, it will dispatch a new stop definition for a single stop.
 *
 * @param originStationCode
 * @param newStationData
 * @param offsets
 * @returns
 */
export const offsetSingleStop = (originStationCode: string, newStationData: StopMetadata, ...offsets: RelativeCoordinates[]) => {
    return (dispatch, getState) => {
        const originalLocation = selectStopLocation(getState(), originStationCode);
        if (!originalLocation) {
            console.warn('Could not offset new stations because the original location is not in redux.', originStationCode, newStationData);
            return;
        }
        const newLocation = offsetCoordinates(originalLocation, ...offsets);
        dispatch(addStopDefinition({ ...newStationData, location: newLocation }));
    };
};

/**
 * This defines a set of stops with equal stop spacing.
 *
 * @param originStationCode
 * @param newStationData
 * @param offset
 * @returns
 */
export const offsetEquallySpacedStops = (originStationCode: string, newStationData: StopMetadata[], offset: RelativeCoordinates) => {
    return (dispatch, getState) => {
        const originalLocation = selectStopLocation(getState(), originStationCode);
        if (!originalLocation) {
            console.warn('Could not offset new stations because the original location is not in redux.', originStationCode, newStationData);
            return;
        }
        dispatch(
            addStopDefinitions(
                newStationData.map((newStation, index) => {
                    return {
                        ...newStation,
                        location: offsetCoordinates(originalLocation, scale(offset, index + 1)),
                    };
                })
            )
        );
    };
};
interface OffsetStopData {
    stationCode: string;
    newStationData: StopMetadata;
}

/**
 * This takes a list of original stops and new stops, and offsets each new stop from the original by the same distance.
 * @param gridOffsetStops
 * @param offsets
 * @returns
 */
export const offsetStopGroup = (gridOffsetStops: OffsetStopData[], ...offsets: RelativeCoordinates[]) => {
    return (dispatch) => {
        gridOffsetStops.forEach((gridOffsetStop) => {
            const { stationCode, newStationData } = gridOffsetStop;
            dispatch(offsetSingleStop(stationCode, newStationData, ...offsets));
        });
    };
};
