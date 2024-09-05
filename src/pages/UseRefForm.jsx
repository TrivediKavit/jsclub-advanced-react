import { useRef, useState } from 'react'

export default function UseRefForm() {

    const [value, setValue] = useState("")
    const [message, setMessage] = useState("Submit to Validate")

    const inputRef = useRef(null)

    const handleSubmit = () => {
        if( !value ) {
            setMessage("Please enter a value.")
            inputRef.current.focus()
        } else {
            setMessage(`Successfully submitted value: ${value}`)
        }
    }

    return (
        <div>
            <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <p>{message}</p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
