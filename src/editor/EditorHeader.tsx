import { Link } from 'react-router-dom';
import GridToggle from './GridToggle';
import './header.scss';

const EditorHeader = () => {
    return (
        <div id="header">
            <nav>
                <Link to="/tokyo">Tokyo</Link>
                <Link to="/oldtokyo">OldTokyo</Link>
            </nav>
            <section>
                <GridToggle />
            </section>
        </div>
    );
};

export default EditorHeader;
