import Button from "./Button";

function Form(props) {
    return (
        <Button theme={props.theme} onClick={() => alert('Form Submitted')}>
            Submit
        </Button>
    )
}

export default Form