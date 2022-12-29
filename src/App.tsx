import './App.scss';
import EditorHeader from './editor/EditorHeader';
import Map from './map/Map';

const App = () => {
    return (
        <div className="App">
            <EditorHeader />
            <Map />
        </div>
    );
};

export default App;
