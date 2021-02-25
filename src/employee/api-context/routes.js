import Qrterminal from "../components/qrterminal/list/Qrterminal";


const routes = [
    {
        path: '/employee',
        name: 'employee',
        exact: true,
        component: Qrterminal,
        meta: {auth: true},
        title: "QR Terminal"
    },

];

export default routes;
