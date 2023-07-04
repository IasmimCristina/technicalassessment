

// Pages:
import HomePage from '../pages/home.f7.html';

import Login from '../pages/login.f7.html';
import Hero from '../pages/hero.f7.html'; 
import Register from '../pages/register.f7.html';



// Used routes:
var routes = [
  {
    path: '/',
    component: Hero,
  },
  {
    path: '/login/',
    component: Login,
  },
  {
    path: '/register/',
    component: Register,
  },
  {
    path: '/home/',
    component: HomePage,
  },
 
];

export default routes;