import Header from "./container/header";
import './components/asset/qrterminal.css'
import React from "react";
import store from './shared/store/InitStore';
import {Provider} from 'react-redux'
import {HashRouter, Route, Switch} from 'react-router-dom';

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const Layout  = React.lazy(() => import('../manager-qrterminal/components/Layout'));
const Login  = React.lazy(() => import('./components/authentication/login/Login'));
const Register = React.lazy(()=>import('./components/authentication/register/Register'))
export default function Home() {
    return (
        <>
            <Provider store={store}>
                <HashRouter>
                    <React.Suspense fallback={loading}>
                        <Switch>
                            <Route exact path="/home" name="Home page" component={Layout}/>
                            <Route exact path="/register" name="Register" component={Register}/>
                            <Route exact path="/" name="Login" component={Login}/>
                        </Switch>
                    </React.Suspense>
                </HashRouter>
            </Provider>
        </>
    )
}
