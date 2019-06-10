import Home from './screens/home/Home';
import Infos from './screens/infos/Infos';

const Routes = [
    {path: '/', component: Home, exact: true},
    {path: '/infos', component: Infos}
];

export default Routes;