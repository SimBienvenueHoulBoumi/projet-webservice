import { useState, useEffect } from 'react';

function useCurrentDateTimestamp(timestamps) {
    const [currentTimestamp, setCurrentTimestamp] = useState(null);
  
    useEffect(() => {
        try {
            if (timestamps && timestamps.length > 0) {
                const now = new Date();
                let date = now.toISOString().slice(0,10)
                let current = timestamps.filter(timestamp => timestamp.slice(0,10) === date);
                setCurrentTimestamp(current);
                }
        } catch (error) {
            console.error()
        }
    }, [timestamps]);
  
    return currentTimestamp;
}


export default useCurrentDateTimestamp
