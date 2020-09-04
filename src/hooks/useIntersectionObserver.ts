import 'intersection-observer';
import React, { useEffect, useRef } from 'react';
/** 检测曝光 */
export const useIntersectionObserver = (
    ref: React.MutableRefObject<HTMLDivElement>,
    onIntersection: (entry: IntersectionObserverEntry) => void,
) => {
    const io = useRef() as React.MutableRefObject<IntersectionObserver>;
    useEffect(() => {
        io.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    io.current.disconnect();
                    if (onIntersection) {
                        onIntersection(entry);
                    }
                }
            });
        });
        io.current.observe(ref.current);
        return () => {
            io.current.disconnect();
        };
    }, [io, onIntersection, ref]);
};
