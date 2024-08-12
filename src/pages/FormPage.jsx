import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";

function FormPage() {

    const [theme, setTheme] = useState('light')
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme' }
            </button>
            <br /><br />
            <Button theme={theme} onClick={() => alert('Button #1 clicked!')}>Button #1</Button>
            <Button theme={theme} onClick={() => alert('Button #2 clicked!')}>Button #2</Button>
            <br /><br />
            <Form theme={theme} />
        </>
    )
}

export default FormPage