import { useRef, useState } from 'react'
import CustomInputField from '../components/CustomInputField'

export default function ForwardRefForm() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    return (
        <div>
            <div className="fullscreen">
                {/* <div className="input-field-container">
                    <label htmlFor="first-name">First Name:</label>
                    <input id="first-name" type="text" value={firstName} ref={firstNameRef} onChange={(e) => setFirstName(e.target.value)} />
                </div> */}
                <CustomInputField id="first-name" label="First Name:" value={firstName} ref={firstNameRef} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className="fullscreen">
                <div className="input-field-container">
                    <label htmlFor="last-name">Last Name:</label>
                    <input id="last-name" type="text" value={lastName} ref={lastNameRef} onChange={(e) => setLastName(e.target.value)} />
                </div>
            </div>

            <div className="fullscreen">
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "auto"}}>
                    <button onClick={() => firstNameRef.current?.focus()}>Focus on First Name ({firstName})</button>
                    <button onClick={() => lastNameRef.current?.focus()}>Focus on Last Name ({lastName})</button>
                </div>
            </div>
        </div>
    )
}
