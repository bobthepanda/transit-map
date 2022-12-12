import { useSearchParams } from "react-router-dom";
import { useShowGrid } from '../utils/ParameterUtils';

const PARAMETER_NAME = 'showGrid';

const GridToggle = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const showGrid: boolean = Boolean(searchParams?.get(PARAMETER_NAME) === 'true');

    const handleChange = () => {
        searchParams.set(PARAMETER_NAME, String(!showGrid));
        setSearchParams(searchParams);
    }

    return (
        <>
        Show grid: <input type="checkbox" onChange={handleChange} checked={showGrid} />
        </>
    )
}

export default GridToggle;