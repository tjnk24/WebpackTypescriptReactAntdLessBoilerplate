import {
    MouseEvent,
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

export const useAsyncButtonClick = (onClick: MouseEventHandler<HTMLElement>) => {
    const isMounted = useRef(false);

    const [isPending, setIsPending] = useState(false);

    const handleClick = useCallback(
        async (event: MouseEvent<HTMLElement>) => {
            if (onClick) {
                try {
                    await new Promise(resolve => {
                        setIsPending(true);

                        return resolve(onClick(event));
                    });
                } finally {
                    isMounted.current && setIsPending(false);
                }
            }
        },
        [onClick],
    );

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        {isPending, handleClick}
    );
};
