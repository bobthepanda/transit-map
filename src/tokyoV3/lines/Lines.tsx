import JREast from './JREast';
import Metro from './Metro';
import Other from './Other';
import Private from './Private';

const Lines = () => {
    return (
        <g id="lines">
            <Private />
            <Other />
            <JREast />
            <Metro />
        </g>
    );
};

export default Lines;
