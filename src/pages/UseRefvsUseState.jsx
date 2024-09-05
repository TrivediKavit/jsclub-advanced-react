import { useEffect, useRef, useState } from 'react'

export default function UseRefvsUseState() {

    const [value, setValue] = useState("")
    // const [count, setCount] = useState(0)

    const count = useRef(0)

    const incrementCount = () => {
        count.current = count.current + 1
    }

    useEffect(() => {
        // setCount(count + 1)
        incrementCount()
    })

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={incrementCount}>Increment Count</button>
            <p>DOM Update Count: {count.current}</p>
        </div>
    )
}
