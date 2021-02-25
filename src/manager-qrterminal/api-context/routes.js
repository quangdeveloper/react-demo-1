import Qrterminal from "../components/qrterminal/list/Qrterminal";


const routes = [
    {
        path: '/qrterminal',
        name: 'qrterminal',
        exact: true,
        component: Qrterminal,
        meta: {auth: true},
        title: "QR Terminal"
    },

];

export default routes;
