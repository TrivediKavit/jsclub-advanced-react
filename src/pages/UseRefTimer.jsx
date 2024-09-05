import { useEffect, useRef, useState } from 'react'

export default function UseRefTimer() {

    const [seconds, setSeconds] = useState(0)
    const intervalRef = useRef(null)

    const startInterval = () => {
        intervalRef.current = window.setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
    }

    const clearInterval = () => {
        if(intervalRef.current) {
            window.clearInterval(intervalRef.current)
        }
    }

    useEffect(() => {
        return clearInterval
    }, [])

    const resetTimer = () => {
        clearInterval()
        setSeconds(0)
    }



    return (
        <div>
            <button onClick={startInterval}>Start</button>
            <button onClick={clearInterval}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
            <p>Time: {seconds}</p>
        </div>
    )
}
