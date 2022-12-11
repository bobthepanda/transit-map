import { useSearchParams } from "react-router-dom";

const GridToggle = ({}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const showGrid: boolean = Boolean(searchParams?.get('showGrid') === 'true');

    const handleChange = () => {
        searchParams.set('showGrid', String(!showGrid));
        setSearchParams(searchParams);
    }

    return (
        <>
        Show grid: <input type="checkbox" onChange={handleChange} checked={showGrid} />
        </>
    )
}

export default GridToggle;