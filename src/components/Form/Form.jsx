import FormContext from "../Context/Context";
import { useContext } from "react";
const Form = () => {
    const { name, setName } = useContext(FormContext);
    return (
        <form>
            <label htmlFor="name"> Your name: </label>
            <input
                type="text"
                id="name"
                value={name}
                placeholder="Type a name!"
                onChange={e => { setName(e.target.value) }}
            >
            </input>
        </form>
    )
}

export default Form;