import './manager-qrterminal/components/asset/qrterminal.css'
import React from "react";
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {GuardedRoute, GuardProvider} from "react-router-guards";
import canActive from "./manager-qrterminal/container/auth-guard";
import { Helmet } from 'react-helmet';
import NotFound from "./manager-qrterminal/container/NotFound";
import Layout from "./manager-qrterminal/components/Layout";
import Login from "./manager-qrterminal/components/authentication/login/Login";
import Register from "./manager-qrterminal/components/authentication/register/Register";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GuardProvider guards={[canActive]} error={NotFound} loading={loading}>
                    <Switch>
                        <GuardedRoute path="/login" exact meta={{ auth: false }} component={Login} />
                        <GuardedRoute path="/register" exact meta={{ auth: false }} component={Register} />
                        <GuardedRoute path={ "/layout"} meta = {{auth: true}} render={props => <Layout {...props} />}/>
                    </Switch>
                </GuardProvider>
            </BrowserRouter>
        </>
    )
}