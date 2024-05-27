import { useState } from "react";
import FormContext from "../Context/Context";

const Wrapper = ({ children }) => {
    const [name, setName] = useState("")
    // incializa el state
    return (
        <FormContext.Provider value={{ name, setName }}>
            {/* provee el context a children, con el value de state */}
            {children}
        </FormContext.Provider>
    );
}

export default Wrapper;