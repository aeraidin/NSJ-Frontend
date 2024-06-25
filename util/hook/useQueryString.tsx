import { useCallback } from 'react';
import { useRouter } from 'next/router';

const useQueryString = ({ Query, name, searchParams, value }: { searchParams: URLSearchParams, name: string, value: string, Query: string | null }) => {
    const createQueryString = useCallback(
        () => {
            if (value === Query) {
                return "";
            } else {
                const params = new URLSearchParams(searchParams.toString());
                params.set(name, value);
                return params.toString();
            }
        },
        [Query, name, searchParams, value]
    );

    return createQueryString;
};

export default useQueryString;
