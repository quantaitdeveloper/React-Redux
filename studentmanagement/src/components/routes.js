import Home from "./Home";
import About from "./About";


import Login from "./loginForm";
import Detail from "./Detail";
import MainQLSV from "./mainQLSV";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
 
  {
    path: "/home",
    exact: true,
    component: Home,
  },

  
  {
    path: "/home/about",
    exact: true,
    component: About,
  },
  {
    path: "/home/qlsv",
    exact: true,
    component: MainQLSV ,

  },
  {
    path:"/detail/:id/:stdID/:name",
    exact:true,
    component: Detail
  }
  
 
];
export default Routes;
