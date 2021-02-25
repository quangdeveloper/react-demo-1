import {Link, NavLink} from "react-router-dom";

export default function NotFound(){
    return(
        <>
            <h1>Not found page request</h1>
            <Link to="/about"> About</Link>
            <Link to="/contact"> contact</Link>
            <NavLink exact activeStyle={{
                backgroundColor : 'white',
                color : 'red'
            }} to="/about" className="my-link">About</NavLink>
        </>
    )
}
