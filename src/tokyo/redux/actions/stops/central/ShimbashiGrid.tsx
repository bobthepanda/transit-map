import { MAJOR_LINE } from '../../../../../map/GridLines';
import { OFFSET } from '../../../../../utils/CommonCoordinates';
import {
    E,
    ENE,
    ESE,
    midPoint,
    N,
    NNE,
    NNW,
    offsetCoordinates,
    scale,
    scaleToUnitX,
    scaleToUnitY,
    SSE,
    SSW,
    W,
    WSW,
} from '../../../../../utils/PathUtils';
import { addStopDefinition, selectIntersection, TextAlignment } from '../../../slice/StopLocation';
import { offsetEquallySpacedStops, offsetSingleStop, offsetStopGroup } from '../../../slice/StopLocationActions';
import { AppDispatch } from '../../../store';

const addShimbashi = (dispatch: AppDispatch) => {
    dispatch(
        offsetStopGroup(
            [
                { stationCode: 'JY 30', newStationData: { stationCode: 'JY 29', strokeColor: 'stroke-yamanote', hideText: true } },
                { stationCode: 'JK 25', newStationData: { stationCode: 'JK 24', strokeColor: 'stroke-keihin-tohoku', hideText: true } },
                {
                    stationCode: 'Y 18',
                    newStationData: { stationCode: 'G 08', strokeColor: 'stroke-ginza', hideText: true },
                },
            ],
            scaleToUnitX(SSW, MAJOR_LINE * 1.75)
        )
    );

    dispatch(
        offsetEquallySpacedStops(
            'JK 24',
            [
                { stationCode: 'JT 02', strokeColor: 'stroke-tokaido', hideText: true },
                { stationCode: 'JO 18', strokeColor: 'stroke-sobu-rapid', hideText: true },
            ],
            scale(ESE, OFFSET)
        )
    );

    dispatch(
        offsetSingleStop(
            'G 08',
            { stationCode: 'A 10', strokeColor: 'stroke-asakusa', textAlignment: TextAlignment.WSW },
            scale(WSW, OFFSET)
        )
    );
};

const addToranomon = (dispatch: AppDispatch, getState) => {
    const toranomonIntersection = selectIntersection(getState(), 'H 07', SSW, 'G 08', SSE);

    dispatch(
        addStopDefinition({
            stationCode: 'G 07',
            strokeColor: 'stroke-ginza',
            location: offsetCoordinates(toranomonIntersection, scaleToUnitX(SSE, OFFSET * 0.5)),
            textAlignment: TextAlignment.ENE,
        })
    );
    dispatch(
        addStopDefinition({
            stationCode: 'H 06',
            strokeColor: 'stroke-hibiya',
            location: offsetCoordinates(toranomonIntersection, scaleToUnitX(SSW, OFFSET)),
            textAlignment: TextAlignment.WNW,
        })
    );
};

const addUchisawiwaicho = (dispatch: AppDispatch, getState) => {
    const marunouchiIntersection = selectIntersection(getState(), 'M 15', SSE, 'I 08', SSW);
    const ginzaIntersection = selectIntersection(getState(), 'G 07', SSE, 'I 08', SSW);
    dispatch(
        addStopDefinition({
            stationCode: 'I 07',
            strokeColor: 'stroke-mita',
            location: midPoint(marunouchiIntersection, ginzaIntersection),
            textAlignment: TextAlignment.ESE,
        })
    );
};

const addTameikeSanno = (dispatch: AppDispatch) => {
    dispatch(offsetSingleStop('G 07', { stationCode: 'G 06', strokeColor: 'stroke-ginza', hideText: true }, scaleToUnitX(NNW, OFFSET * 4)));
    dispatch(
        offsetSingleStop('G 06', { stationCode: 'N 06', strokeColor: 'stroke-namboku', textAlignment: TextAlignment.WNW }, scale(W, OFFSET))
    );

    dispatch(
        offsetSingleStop('G 06', { stationCode: 'M 14', strokeColor: 'stroke-marunouchi', hideText: true }, scaleToUnitY(NNE, OFFSET * 3))
    );
    dispatch(
        offsetSingleStop(
            'M 14',
            { stationCode: 'C 07', strokeColor: 'stroke-chiyoda', textAlignment: '-translate-y-vertical-double -translate-x-[10pt]' },
            scale(N, OFFSET)
        )
    );
};

const addNagatcho = (dispatch: AppDispatch) => {
    dispatch(
        offsetSingleStop(
            'G 06',
            { stationCode: 'G 05', strokeColor: 'stroke-ginza', textAlignment: TextAlignment.WSW },
            scaleToUnitX(NNW, OFFSET * 4)
        )
    );
    dispatch(offsetSingleStop('G 05', { stationCode: 'M 13', strokeColor: 'stroke-marunouchi', hideText: true }, scale(ENE, OFFSET)));

    dispatch(
        offsetSingleStop('G 05', { stationCode: 'N 07', strokeColor: 'stroke-namboku', hideText: true }, scaleToUnitX(ENE, OFFSET * 2))
    );
    dispatch(offsetSingleStop('N 07', { stationCode: 'Y 16', strokeColor: 'stroke-yurakucho', hideText: true }, scale(ENE, OFFSET)));
    dispatch(
        offsetSingleStop('Y 16', { stationCode: 'Z 04', strokeColor: 'stroke-hanzomon', textAlignment: TextAlignment.UP }, scale(N, OFFSET))
    );

    dispatch(
        offsetSingleStop(
            'Y 16',
            { stationCode: 'Y 17', strokeColor: 'stroke-yurakucho', textAlignment: TextAlignment.UP },
            scale(E, MAJOR_LINE * 1.5),
            scaleToUnitY(SSE, OFFSET * 1.5)
        )
    );
};

export const addShimbashiGrid = (dispatch: AppDispatch) => {
    dispatch(addShimbashi);
    dispatch(addToranomon);
    dispatch(addUchisawiwaicho);
    dispatch(addTameikeSanno);
    dispatch(addNagatcho);
};
