import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import NotFound from "./not-found";

export default function RouteDemo() {

    return (
            <Router>
                <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    {/*<Route component={NotFound}/>*/}
                </div>
            </Router>
    )
}
