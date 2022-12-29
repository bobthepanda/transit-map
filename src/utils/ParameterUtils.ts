import { useSearchParams } from 'react-router-dom';

export const GRID_PARAMETER_NAME = 'showGrid';

export const useShowGrid = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    return Boolean(searchParams?.get(GRID_PARAMETER_NAME) === 'true');
};
