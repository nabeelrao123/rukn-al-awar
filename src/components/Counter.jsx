import { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasStarted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;

                    let start = 0;
                    const duration = 1500; // animation time
                    const stepTime = 16;
                    const increment = end / (duration / stepTime);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, stepTime);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [end]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

export default Counter;
