import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";

function FormPageWithContext() {

    const [theme, setTheme] = useState('light')
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme' }
            </button>
            <br /><br />
            <Button onClick={() => alert('Button #1 clicked!')}>Button #1</Button>
            <Button onClick={() => alert('Button #2 clicked!')}>Button #2</Button>
            <br /><br />
            <ThemeProvider value={theme}>
                <Form />
            </ThemeProvider>
        </>
    )
}

export default FormPageWithContext