import { createContext, useCallback, useState } from 'react';

export const usePayload = <T>(initState?: Partial<T>) => {
    const [state, setState] = useState(initState as T);
    const updateState = useCallback((payload: Partial<T>) => {
        setState((old) => {
            return { ...old, ...payload };
        });
    }, []);

    return { state, updateState };
};

type PayloadContextType<T> = {
    state: T;
    updateState: (payload: Partial<T>) => void;
};

export const createPayloadContext = <T>() => {
    return createContext<PayloadContextType<T>>({} as PayloadContextType<T>);
};
