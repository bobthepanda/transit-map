import { Coordinates } from '../interfaces/Dimensions';
import { MAJOR_LINE } from '../map/GridLines';
import { Stop, TextAlignment } from '../symbols/BasicStop';

const origin: Coordinates = { x: 100, y: 100 };

const TokyoStops = (): JSX.Element => {
    return (
        <>
        <Stop location={{x: MAJOR_LINE, y: MAJOR_LINE}} text="Some text" subtitleText="Some subtitleText" textAlignment={TextAlignment.LEFT}/>
        <Stop location={{x: MAJOR_LINE * 2, y: MAJOR_LINE}} text="Some text" subtitleText="Some subtitleText" textAlignment={TextAlignment.RIGHT}/>
        <Stop location={{x: MAJOR_LINE * 3, y: MAJOR_LINE}} text="Some text" subtitleText="Some subtitleText" textAlignment={TextAlignment.UP}/>
        <Stop location={{x: MAJOR_LINE * 4, y: MAJOR_LINE}} text="Some text" subtitleText="Some subtitleText" textAlignment={TextAlignment.DOWN}/>
        <Stop location={{x: MAJOR_LINE * 5, y: MAJOR_LINE}} text="Some text" subtitleText="Some subtitleText" textAlignment={TextAlignment.UPPER_RIGHT}/>
        <Stop location={{x: MAJOR_LINE * 6, y: MAJOR_LINE}} text="Some text" subtitleText="Some subtitleText" textAlignment={TextAlignment.UPPER_LEFT}/>
        <Stop location={{x: MAJOR_LINE * 7, y: MAJOR_LINE}} text="Some text" subtitleText="Some subtitleText" textAlignment={TextAlignment.LOWER_RIGHT}/>
        <Stop location={{x: MAJOR_LINE * 8, y: MAJOR_LINE}} text="Some text" subtitleText="Some subtitleText" textAlignment={TextAlignment.LOWER_LEFT}/>
        </>

    )
}

export default TokyoStops;