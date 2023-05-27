import {
    useCallback,
    useEffect,
    useState,
} from 'react';

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;

    return {
        width,
        height,
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<{
        width: number;
        height: number;
    }>(
        getWindowDimensions(),
    );

    const handleResize = useCallback(() => {
        setWindowDimensions(getWindowDimensions());
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return windowDimensions;
}
