import {HashRouter, Route, Switch} from "react-router-dom";
import Header from "../container/header";
import React from "react";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)
const Qrterminal = React.lazy(() => import('../components/qrterminal/list/Qrterminal'));
export default function Layout(props) {
    return (
        <>
            <Header/>
            <HashRouter>
                <React.Suspense fallback={loading}>
                    <Switch>
                        <Route path="/qrterminal" name="QR Terminal2" component={Qrterminal}/>
                        <Route exact path="" name="QR Terminal" component={Qrterminal}/>
                    </Switch>
                </React.Suspense>
            </HashRouter>
        </>
    )
}
