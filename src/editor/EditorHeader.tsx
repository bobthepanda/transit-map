import { Link } from 'react-router-dom';
import GridToggle from './GridToggle';

const EditorHeader = () => {
    return (
        <>
            <nav>
                <Link to="/tokyo">Tokyo</Link>
            </nav>
            <section>
                <GridToggle />
            </section>
        </>
    );
};

export default EditorHeader;
