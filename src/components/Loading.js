import React, { useState, useEffect } from 'react';

import style from '../styles/Loading.module.css';

export default function Loading() {
    const [dotCount, setDotCount] = useState(0);
    
    useEffect(() => {
        let count = 0;

        const interval = setInterval(() => {
            if (count === 3) {
                count = 0;
            } else {
                count++;
            }
            setDotCount(count);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={style.modal_cover}>
            <div className={style.modal}>
                {`Loading${'.'.repeat(dotCount)}`}
            </div>
        </div>
    );
}