import { useContext } from 'react';
import '../Navbar/Navbar.css'
import FormContext from '../Context/Context';
const Navbar = () => {
    const { name } = useContext(FormContext);
    return (
        <div className='navbar'>
            <h1> Hi {name}! </h1>
        </div>
    )
}

export default Navbar;