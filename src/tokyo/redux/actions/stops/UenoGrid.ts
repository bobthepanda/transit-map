import { MAJOR_LINE } from '../../../../map/GridLines';
import { OFFSET } from '../../../../utils/CommonCoordinates';
import { E, ESE, N, NNE, offsetCoordinates, S, scale, scaleToUnitX, scaleToUnitY, WNW } from '../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, TextAlignment } from '../../slice/StopLocation';
import { fillInStops, offsetEquallySpacedStops, offsetSingleStop, offsetStopGroup } from '../../slice/StopLocationActions';
import { AppDispatch, RootState } from '../../store';

const addUeno = (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
        offsetStopGroup(
            [
                {
                    stationCode: 'JY 04',
                    newStationData: { stationCode: 'JY 05', strokeColor: 'stroke-yamanote', textAlignment: TextAlignment.WNW },
                },
                { stationCode: 'JK 29', newStationData: { stationCode: 'JK 30', strokeColor: 'stroke-keihin-tohoku', hideText: true } },
            ],
            scaleToUnitY(NNE, MAJOR_LINE * 2)
        )
    );
    dispatch(
        offsetEquallySpacedStops(
            'JK 30',
            [
                { stationCode: 'JU 02', strokeColor: 'stroke-tohoku', hideText: true },
                { stationCode: 'JJ 01', strokeColor: 'stroke-joban-rapid', hideText: true },
            ],
            scale(ESE, OFFSET)
        )
    );
    dispatch(
        addStopDefinition({
            stationCode: 'H 18',
            location: selectIntersection(getState(), 'H 17', NNE, 'JJ 01', ESE),
            hideText: true,
            strokeColor: 'stroke-hibiya',
        })
    );
    dispatch(offsetSingleStop('H 18', { stationCode: 'G 16', strokeColor: 'stroke-ginza', hideText: true }, scale(S, OFFSET)));
};

const addAsakusa = (dispatch: AppDispatch, getState: () => RootState) => {
    const asakusaIntersection = selectIntersection(getState(), 'G 16', E, 'A 17', NNE);
    dispatch(
        addStopDefinition({
            stationCode: 'G 19',
            location: offsetCoordinates(asakusaIntersection, scaleToUnitX(E, OFFSET * 2)),
            strokeColor: 'stroke-ginza',
            hideText: true,
        })
    );
    dispatch(
        offsetSingleStop(
            'G 19',
            { stationCode: 'A 18', strokeColor: 'stroke-asakusa', textAlignment: TextAlignment.DOWN },
            scale(S, OFFSET)
        )
    );
    dispatch(fillInStops('G', 16, 19, 'stroke-ginza', [TextAlignment.DOWN, TextAlignment.UP]));

    dispatch(
        addStopDefinition({
            stationCode: 'TX 03',
            location: offsetCoordinates(selectIntersection(getState(), 'A 17', NNE, 'A 18', N), scale(WNW, OFFSET)),
            textAlignment: TextAlignment.ESE,
        })
    );
};

export const addUenoGrid = (dispatch: AppDispatch) => {
    dispatch(addUeno);
    dispatch(addAsakusa);
};
