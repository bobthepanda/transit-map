import JREast from './JREast';
import Metro from './Metro';
import Other from './Other';

const Lines = () => {
    return (
        <g id="lines">
            <Other />
            <JREast />
            <Metro />
        </g>
    );
};

export default Lines;
