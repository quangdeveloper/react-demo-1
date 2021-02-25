import {ToastContainer} from "react-toastify";
import React from "react";
import Header from "./container/header";
import Aside from "./container/aside";

// const Login = React.lazy(() => import('./page/login/'));

export default function HomeUser() {

    return (
        <>
            <Header/>
            <Aside/>
            {/*<HashRouter>*/}
            {/*    <React.Suspense fallback={loading}>*/}
            {/*        <Switch>*/}
                        {/*<Route exact path="/login" name="Login" component={Login}/>*/}
            {/*        </Switch>*/}
            {/*    </React.Suspense>*/}
            {/*</HashRouter>*/}

            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </>

    )

}
