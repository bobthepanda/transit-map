import { RelativeCoordinates } from '../../../interfaces/Dimensions';
import { offsetCoordinates, scale } from '../../../utils/PathUtils';
import { generateStationCode } from '../../../utils/StopUtils';
import { AppDispatch, RootState } from '../store';
import { addStopDefinition, selectOffset, selectStopLocation, StopDefinition, StopMetadata } from './StopLocation';

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
    return (dispatch: AppDispatch, getState: () => RootState) => {
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
export const offsetEquallySpacedStops = (originStationCode: string, newStationData: StopMetadata[], ...offsets: RelativeCoordinates[]) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {
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
                        location: offsetCoordinates(originalLocation, ...offsets.map((offset) => scale(offset, index + 1))),
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
    return (dispatch: AppDispatch) => {
        gridOffsetStops.forEach((gridOffsetStop) => {
            const { stationCode, newStationData } = gridOffsetStop;
            dispatch(offsetSingleStop(stationCode, newStationData, ...offsets));
        });
    };
};

/**
 * This spaces out stops with a common spacing.
 *
 * @param stationPrefix     common stationCode prefix
 * @param startCount        start stationCode number that already has a location
 * @param endCount          end stationCode number. Added stops *is* inclusive of the endCount
 * @param strokeColor
 * @param textAlignments
 * @param offsets
 * @returns
 */
export const spaceOutStops = ({
    stationPrefix,
    startCount,
    endCount,
    strokeColor,
    textAlignments,
    offsets = [],
    hideTexts = [],
}: {
    stationPrefix: string;
    startCount: number;
    endCount: number;
    strokeColor?: string;
    textAlignments?: string[];
    offsets?: RelativeCoordinates[];
    hideTexts?: string[];
}) => {
    return (dispatch: AppDispatch) => {
        const newStopDefinitions: StopMetadata[] = [];

        if (startCount < endCount) {
            for (let i = startCount + 1; i <= endCount; i += 1) {
                const stationCode = generateStationCode(stationPrefix, i);
                const textAlignment = textAlignments?.[(i - 1) % textAlignments.length];
                newStopDefinitions.push({
                    stationCode,
                    strokeColor,
                    textAlignment,
                    hideText: hideTexts.includes(stationCode),
                });
            }
        } else {
            for (let i = startCount - 1; i >= endCount; i -= 1) {
                const stationCode = generateStationCode(stationPrefix, i);
                const textAlignment = textAlignments?.[(i - 1) % textAlignments.length];
                newStopDefinitions.push({
                    stationCode,
                    strokeColor,
                    textAlignment,
                    hideText: hideTexts.includes(stationCode),
                });
            }
        }

        dispatch(offsetEquallySpacedStops(generateStationCode(stationPrefix, startCount), newStopDefinitions, ...offsets));
    };
};

/**
 * This fills in stops with a known station spacing.
 *
 * @param stationPrefix     common stationCode prefix
 * @param startCount        start stationCode number that already has a location
 * @param endCount          end stationCode number that already has a location. Added stops *is not* inclusive of the endCount
 * @param strokeColor
 * @param textAlignments
 * @returns
 */
export const fillInStops = ({
    stationPrefix,
    startCount,
    endCount,
    strokeColor,
    textAlignments,
    hideTexts,
}: {
    stationPrefix: string;
    startCount: number;
    endCount: number;
    strokeColor?: string;
    textAlignments?: string[];
    hideTexts?: string[];
}) => {
    if (endCount < startCount) {
        return fillInStops({ stationPrefix, startCount: endCount, endCount: startCount, strokeColor, textAlignments, hideTexts });
    }

    return (dispatch: AppDispatch, getState: () => RootState) => {
        const offset: RelativeCoordinates = selectOffset(
            getState(),
            generateStationCode(stationPrefix, endCount),
            generateStationCode(stationPrefix, startCount)
        );
        const numberOfStopsFilledIn = endCount - startCount - 1;
        dispatch(
            spaceOutStops({
                stationPrefix,
                startCount,
                endCount: endCount - 1,
                strokeColor,
                textAlignments,
                offsets: [scale(offset, 1 / (numberOfStopsFilledIn + 1))],
                hideTexts,
            })
        );
    };
};
