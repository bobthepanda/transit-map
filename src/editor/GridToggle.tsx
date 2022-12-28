import { useSearchParams } from "react-router-dom";
import {
  useShowGrid,
  GRID_PARAMETER_NAME as PARAMETER_NAME,
} from "../utils/ParameterUtils";

const GridToggle = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const showGrid: boolean = useShowGrid();

  const handleChange = () => {
    searchParams.set(PARAMETER_NAME, String(!showGrid));
    setSearchParams(searchParams);
  };

  return (
    <>
      Show grid:{" "}
      <input type="checkbox" onChange={handleChange} checked={showGrid} />
    </>
  );
};

export default GridToggle;
