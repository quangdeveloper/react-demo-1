import {Link, NavLink} from "react-router-dom";

export default function  Contact(){

    return(
        <>
            <h1>This is my contact</h1>
            <Link to="/about"> About</Link>
            <Link to="/contact"> contact</Link>
            <NavLink exact activeStyle={{
                backgroundColor : 'white',
                color : 'red'
            }} to="/about" className="my-link">About</NavLink>
        </>
    )
}
