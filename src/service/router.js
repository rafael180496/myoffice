import NotMatch from '../page/nomatch'
import HomePage from '../page/home';
import AboutPage from '../page/about';
import ServicePage from '../page/servicio';
import PortPage from '../page/portafolio';


export const  ROUTERS_APP = [
    {
       path: "/error/:cod",
       pos: 1,
       descrip: "Error de la pagina",
       component: NotMatch
     },
     {
       path: "/",
       pos: 2,
       descrip: "Inicio",
       component: HomePage
     },
     {
       path: "/acerca",
       pos: 3,
       descrip: "Acerca",
       component: AboutPage
     },
     {
       path: "/servicios",
       pos: 4,
       descrip: "Servicios",
       component: ServicePage
     },
     {
       path: "/portafolio",
       pos: 5,
       descrip: "Portafolio",
       component: PortPage
     }
   ];