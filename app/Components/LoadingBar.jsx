import React, { useEffect, useState } from 'react';

const LoadingBar = ({ isLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        console.log('useEffect triggered, isLoading:', isLoading);
        let interval;
        if (isLoading) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    console.log('Current progress inside interval:', prev);
                    if (prev < 19) {
                        return prev + 1;
                    } else {
                        return 0;
                    }
                });
            }, 300);

            return () => {
                console.log('Clearing interval');
                clearInterval(interval);
            };
        } else {
            setProgress(0);
        }
    }, [isLoading]);

    const blocks = Array.from({ length: 20 }, (_, i) => i);

    return (
        <div className="w-full h-4 border overflow-hidden flex">
            {blocks.map((block) => (
                <div
                    key={block}
                    className={`h-full ${progress > block ? 'bg-white' : 'bg-black'} m-1`}
                    style={{ width: '5%' }} // Ensuring each block takes up 5% of the width
                ></div>
            ))}
        </div>
    );
};

export default LoadingBar;
