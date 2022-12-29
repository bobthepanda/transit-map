import { Coordinates } from '../../interfaces/Dimensions';
import {
    curveFrom,
    EAST,
    generatePoint,
    horizontalToLocation,
    lineToLocation,
    NORTH,
    SOUTH,
    SOUTHEAST,
    startAtLocation,
    verticalToLocation,
} from '../PathUtils';

describe('PathUtils', () => {
    const commonStart: Coordinates = { x: 1, y: 2 };
    const endReference: Coordinates = { x: 10, y: 10 };
    describe('start', () => {
        it('runs', () => {
            expect(startAtLocation(commonStart)).toBe('M 1 2');
        });
    });

    describe('horizontal', () => {
        it('runs', () => {
            expect(horizontalToLocation(commonStart)).toBe('H 1');
        });
    });

    describe('vertical', () => {
        it('runs', () => {
            expect(verticalToLocation(commonStart)).toBe('V 2');
        });
    });

    describe('lineTo', () => {
        it('runs', () => {
            expect(lineToLocation(commonStart)).toBe('L 1 2');
        });
    });

    describe('generatePoint', () => {
        const commonCase = { start: commonStart, endReference };

        it('works with vertical slope', () => {
            const point = generatePoint({ ...commonCase, slope: NORTH });

            expect(point.x).toBe(1);
            expect(point.y).toBe(10);
        });

        it('works with horizontal slope', () => {
            const point = generatePoint({ ...commonCase, slope: EAST });

            expect(point.x).toBe(10);
            expect(point.y).toBe(2);
        });

        it('works with normal slope', () => {
            const point = generatePoint({ ...commonCase, slope: SOUTHEAST });

            expect(point.x).toBe(10);
            expect(point.y).toBe(11);
        });

        it('works with normal backwards', () => {
            const point = generatePoint({ start: endReference, endReference: commonStart, slope: SOUTHEAST });

            expect(point.x).toBe(1);
            expect(point.y).toBe(1);
        });
    });

    describe('curveFrom', () => {
        it('generates curve east then south', () => {
            const curveStringArray: string[] = curveFrom({
                start: commonStart,
                end: endReference,
                firstDirection: EAST,
                secondDirection: SOUTH,
                radius: 2,
            }).split(/\r?\n/);

            expect(curveStringArray).toHaveLength(3);
            expect(curveStringArray[0].trim()).toBe(lineToLocation({ x: 8, y: 2 }));
            expect(curveStringArray[1].trim()).toBe('Q 10 2 10 4');
            expect(curveStringArray[2].trim()).toBe(lineToLocation(endReference));
        });

        it('generates curve south then east', () => {
            const curveStringArray: string[] = curveFrom({
                start: commonStart,
                end: endReference,
                firstDirection: SOUTH,
                secondDirection: EAST,
                radius: 2,
            }).split(/\r?\n/);

            expect(curveStringArray).toHaveLength(3);
            expect(curveStringArray[0].trim()).toBe(lineToLocation({ y: 8, x: 1 }));
            expect(curveStringArray[1].trim()).toBe('Q 1 10 3 10');
            expect(curveStringArray[2].trim()).toBe(lineToLocation(endReference));
        });
    });
});
