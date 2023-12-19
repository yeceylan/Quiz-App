import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout,mode }) {
    const [remainingTime, setRemaininTime] = useState(timeout);

    useEffect(()=>{
        const timer = setTimeout(onTimeout, timeout);

        return ()=>{
            clearTimeout(timer);
        };
    },[timeout,onTimeout]);
    

    useEffect(() => {
        const interval= setInterval(() => {
            setRemaininTime(prevRemaininTime => prevRemaininTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return <progress id="question-time" max={timeout} value={remainingTime} className={mode}></progress>
}