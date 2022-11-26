import React , {Fragment,useContext} from 'react'
import {Link} from 'react-router-dom'
import {isAuth} from "../utils/functions"
import {useHistory} from "react-router-dom";
import { UserContext } from '../context';

const Nav = () => {
    const [state, setState] = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        setState({user : {}, token: ""})
        localStorage.removeItem('auth')
        history.push('/login')
    }

    console.log("STATE =>", state)
    return (
        <ul className='nav border'>
            <li className='nav-item'>
                <Link className='nav-link active' aria-current="page" to="/">
                    Home
                </Link>
            </li>

            {state && state.token ? (
                <Fragment>
                <li className="nav-item">
                    <span onClick={logout} className="nav-link">
                        Logout
                    </span>
                </li>
                </Fragment>
            ) : (
            <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to="/register">
                    Sign up
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="login">
                    Login
                </Link>
            </li>
            
            </Fragment>
            )}
        </ul>
    );
}

export default Nav;