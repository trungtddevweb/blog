import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [deboundcedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handle);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return deboundcedValue;
};

export default useDebounce;
