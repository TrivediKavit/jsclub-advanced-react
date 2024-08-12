import { useContext } from "react"
import { ThemeContext, useTheme } from "../contexts/ThemeContext"

const baseStyle = {
    borderRadius: '5px',
    transition: 'all 0.2s ease-in-out'
}

const lightStyle = {
    ...baseStyle,
    backgroundColor: '#ffffff',
    color: '#000000'
}

const darkStyle = {
    ...baseStyle,
    backgroundColor: '#000000',
    color: '#ffffff'
}

function Button(props) {
    // const theme = useTheme()
    return(
        <ThemeContext.Consumer>
            {(theme) => (
                <button style={theme === 'light' ? lightStyle : darkStyle} onClick={props.onClick}>{props.children}</button>
            )}
        </ThemeContext.Consumer>
    )
}

export default Button;